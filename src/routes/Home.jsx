import { useContext } from "react";
import { Button } from "../components/elements/Button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { OrderModal } from "../components/OrderModal";
import { ProductsContainer } from "../components/Products";
import { DataProvider } from "../context/DataContextProvider";
import { ShoppingCart } from "../assets/icons/ShoppingCart";
import { Layout } from "../components/Layout";

export const Home = () => {
  const { order, handleSeeOrderModal } = useContext(DataProvider);
  return (
    <Layout>
      <Header>
        <Button
          className="flex items-center justify-center relative"
          onClick={() => handleSeeOrderModal(true)}
        >
          <span className="absolute top-0 right-1 -translate-y-1/2 translate-x-1/2 size-5 flex items-center justify-center rounded-full text-white bg-gray-400">
            {order.length}
          </span>
          <ShoppingCart className="text-white size-8 hover:text-primaryViolet transition" />
        </Button>
      </Header>
      <main className="w-full px-4 max-w-screen-2xl md:px-0 flex items-center justify-center ">
        <OrderModal />
        <ProductsContainer />
      </main>
      <Footer />
    </Layout>
  );
};
