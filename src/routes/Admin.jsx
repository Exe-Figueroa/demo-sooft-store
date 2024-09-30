import { useContext, useEffect, useState } from "react";
import { LogOut } from "../assets/icons/LogOut";
import { Plus } from "../assets/icons/Plus";
import { Button } from "../components/elements/Button";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { ProductItem } from "../components/ProductItem";
import { DataProvider } from "../context/DataContextProvider";
import { ProductsForm } from "../components/ProductsForm";
import { ProductService } from "../products-management/application/product.service";
import { supabaseClient } from "../libs/supabaseConnection";
import { ProductSupabaseRepository } from "../products-management/infraestructure/product.repository";
import { ImageServices } from "../images-management/application/image.service";
import {
  azureClient,
  azureContainerClient,
} from "../images-management/infraestructure/azureBlobConnection";
import { ImageRepositoryAzure } from "../images-management/infraestructure/image.repository";

const productService = new ProductService(
  new ProductSupabaseRepository(supabaseClient)
);

const imageService = new ImageServices(
  new ImageRepositoryAzure(azureClient, azureContainerClient)
);

export const Admin = () => {
  const [initialValues, setInitialValues] = useState({});
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    productService.getAllProducts().then(setProducts).catch(console.error);
  }, [reload]);

  const { logOut, handleSeeProductForm } = useContext(DataProvider);
  const handleEditProduct = (product) => {
    setInitialValues(product);
    handleSeeProductForm(true);
  };
  const handleNewProduct = () => {
    setInitialValues({});
    handleSeeProductForm(true);
  };
  const handleReload = () => setReload(!reload);
  return (
    <Layout>
      <Header>
        <Button
          onClick={logOut}
          className="font-bold text-white text-xl text-center hover:text-primaryViolet transition"
        >
          <LogOut />
        </Button>
      </Header>
      <ProductsForm
        productService={productService}
        imageService={imageService}
        handleReload={handleReload}
        initialValues={initialValues}
      />
      <main className="container mx-auto p-4">
        <Button
          className="mb-6 bg-black hover:bg-gray-800 text-white flex items-center py-1.5 px-3 rounded-lg font-semibold"
          onClick={() => handleNewProduct()}
        >
          <Plus className="mr-2 h-4 w-4" /> Añadir Producto
        </Button>
        <div className="space-y-4">
          {products?.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              productService={productService}
              imageService={imageService}
              handleReload={handleReload}
              editProduct={() => handleEditProduct(product)}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};
