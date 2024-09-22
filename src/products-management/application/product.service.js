export class ImageServices {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }
  createProduct = async (newProduct) => {
    return await this.productRepository.createProduct(newProduct);
  };
  deleteProduct = async (id) => {
    return await this.productRepository.deleteProduct(id);
  };
  updateProduct = async (id, newProduct) => {
    return await this.productRepository.updateProduct(id, newProduct);
  };
  getAllProducts = async () => {
    return await this.productRepository.getAllProducts();
  };
}
