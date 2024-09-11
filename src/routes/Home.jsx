import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductsContainer } from "../components/Products";

export const Home = () => {
  return (
    <main className="flex flex-col items-center gap-4">
      <Header />
      <ProductsContainer />
      <Footer/>
    </main>
  );
};
