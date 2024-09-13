import { OrderProduct } from "./OrderProduct";

export const OrderProductsContainer = ({
  order,
  updateProductById,
  deleteProductById,
}) => {
  return (
    <div className="flex-grow overflow-y-auto p-4">
      {order.map((product) => (
        <OrderProduct
          key={product.id}
          product={product}
          updateProductById={updateProductById}
          deleteProductById={deleteProductById}
        />
      ))}
    </div>
  );
};
