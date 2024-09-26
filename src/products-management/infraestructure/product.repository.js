export class ProductSupabaseRepository {
  constructor(supabaseClient) {
    this.supabaseClient = supabaseClient;
  }
  createProduct = async (newProduct) => {
    try {
      const { data, error } = await this.supabaseClient
        .from("products")
        .insert([newProduct])
        .select();
      if (error) {
        throw new Error(error.message);
      }
      return data[0];
    } catch (error) {
      console.error("Error into createProduct: ", error);
      throw error;
    }
  };
  deleteProduct = async (id) => {
    try {
      const { error } = await this.supabaseClient
        .from("products")
        .delete()
        .eq("id", id);
      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error("error into deleteProduct:", error.message);
      throw error;
    }
  };
  updateProduct = async (id, newProduct) => {
    try {
      const { data, error } = await this.supabaseClient
        .from("products")
        .update(newProduct)
        .eq("id", id)
        .select();
      if (error) {
        throw new Error(error.message);
      }
      return data;
    } catch (error) {
      console.error("error into deleteProduct:", error.message);
      throw error;
    }
  };
  getAllProducts = async () => {
    try {
      let { data: products, error } = await this.supabaseClient
        .from("products")
        .select("*");
      if (error) {
        throw new Error(error.message);
      }
      return products;
    } catch (error) {
      console.error("error into deleteProduct:", error.message);
      throw error;
    }
  };
}
