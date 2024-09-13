import { OrderProduct } from "./OrderProduct";

export const OrderProductsContainer = () => {
  return (
    <div className="flex-grow overflow-y-auto p-4">
      <OrderProduct />
      <OrderProduct />
      <OrderProduct />
      <OrderProduct />
    </div>
  );
};
