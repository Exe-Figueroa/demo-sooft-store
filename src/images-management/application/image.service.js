export class ImageServices {
  constructor(imageRepository) {
    this.imageRepository = imageRepository;
  }
  createImage = async (fileImage) => {
    return await this.imageRepository.createImage(fileImage);
  };
  deleteImage = async (id) => {
    return await this.imageRepository.deleteImage(id);
  };
  updateImage = async (id, newImage) => {
    return await this.imageRepository.updateImage(id, newImage);
  };
}
