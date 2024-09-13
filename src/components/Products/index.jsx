import dummyProducts from "../../data/dummyProducts.json"
import { ProductCard } from "./ProductCard";
export const ProductsContainer = () => {
  return (
    <section className="grid grid-cols-auto-fill-270-300 gap-2 md:gap-4 w-9/12">
      {dummyProducts.map(product => <ProductCard key={product.id} product={product}/>)}
    </section>
  );
};
