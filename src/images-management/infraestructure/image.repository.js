import { getExtension } from "../../utils/getMimeType";

export class ImageRepositoryAzure {
  constructor(client, containerClient) {
    this.client = client;
    this.containerClient = containerClient;
  }
  createImage = async (image) => {
    if (!image) return null;
    const id = `${new Date().toISOString()}.${getExtension(image.type)}`;
    const blockBlobClient = this.containerClient.getBlockBlobClient(id);
    try {
      await blockBlobClient.uploadBrowserData(image);
      return {
        url: blockBlobClient.url,
        id: id,
      };
    } catch (error) {
      console.error("Error al subir el archivo:", error.message);
    }
  };
  deleteImage = async (id) => {
    const blockBlobClient = this.containerClient.getBlockBlobClient(id);
    try {
      const deleteResponse = await blockBlobClient.delete();
      console.log(`Blob eliminado con éxito: ${id}`, deleteResponse);
    } catch (error) {
      console.error("Error al eliminar el blob:", error.message);
    }
  };
  updateImage = async (id, newImage) => {
    try {
      const image = await this.createImage(newImage);
      await this.deleteImage(id);
      return image;
    } catch (error) {
      console.error("Error al subir o sobrescribir el archivo:", error.message);
    }
  };
}
