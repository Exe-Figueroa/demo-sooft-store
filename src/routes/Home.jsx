import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { OrderModal } from "../components/OrderModal";
import { ProductsContainer } from "../components/Products";

export const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Header />
    <main className="w-full px-4 max-w-screen-2xl md:px-0 flex items-center justify-center ">
      <OrderModal />
      <ProductsContainer />
    </main>
      <Footer/>

    </div>
  );
};
