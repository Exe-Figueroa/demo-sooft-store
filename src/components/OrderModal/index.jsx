import { useContext, useEffect, useState } from "react";
import { Button } from "../elements/Button";
import { OrderHeader } from "./OrderHeader";
import { OrderProductsContainer } from "./OrderProductsContainer";
import { DataProvider } from "../../context/DataContextProvider";

export const OrderModal = () => {
  const {
    seeOrderModal,
    handleSeeOrderModal,
    order,
    updateProductById,
    deleteProductById,
  } = useContext(DataProvider);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotalPrice = order.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    );
    setTotal(newTotalPrice.toFixed(2));
  }, [order]);
  return (
    <div
      className={`w-screen h-screen fixed top-0 ${
        seeOrderModal ? "backdrop-blur-sm bg-black/30 z-50" : "-z-50"
      } `}
    >
      <section
        className={`w-full max-w-screen-sm h-full transition duration-200 bg-slate-50 fixed top-0 left-full sm:rounded-l-lg flex flex-col ${
          seeOrderModal && "-translate-x-full"
        }`}
      >
        <OrderHeader handleSeeOrderModal={handleSeeOrderModal} />
        <OrderProductsContainer
          order={order}
          updateProductById={updateProductById}
          deleteProductById={deleteProductById}
        />
        <div className="p-4 bg-gray-100 mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-xl">${total}</span>
          </div>
          <Button
            className="w-full bg-[#9ACA3C] text-white py-2 rounded hover:bg-[#8BB92E] transition-colors disabled:opacity-50"
            disabled={order.length > 0 ? false : true}
            onClick={() => alert("COmprando")}
          >
            Confirmar Orden
          </Button>
        </div>
      </section>
    </div>
  );
};
