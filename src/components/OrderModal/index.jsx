import { Button } from "../elements/Button";
import { OrderHeader } from "./OrderHeader";
import { OrderProductsContainer } from "./OrderProductsContainer";

export const OrderModal = () => {

  return (
    <div className="w-screen h-screen fixed top-0 z-50 backdrop-blur-sm bg-black/30 ">
      <section className="w-full max-w-screen-sm h-full bg-slate-50 fixed top-0 right-0 sm:rounded-l-lg flex flex-col">
        <OrderHeader />
        <OrderProductsContainer />
        <div className="p-4 bg-gray-100 mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-xl">$918873</span>
          </div>
          <Button className="w-full bg-[#9ACA3C] text-white py-2 rounded hover:bg-[#8BB92E] transition-colors">
            Confirmar Orden
          </Button>
        </div>
      </section>
    </div>
  );
};
