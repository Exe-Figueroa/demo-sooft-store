import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductService } from "../../products-management/application/product.service";
import { ProductSupabaseRepository } from "../../products-management/infraestructure/product.repository";
import { supabaseClient } from "../../libs/supabaseConnection";

const productService = new ProductService(
  new ProductSupabaseRepository(supabaseClient)
);

export const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
useEffect(() => {
    productService.getAllProducts().then(setProducts).catch(console.error);
  }, []);
  return (
    <section className="grid grid-cols-auto-fill-270-300 gap-2 md:gap-4 w-9/12">
      {products.map(product => <ProductCard key={product.id} product={product}/>)}
    </section>
  );
};
