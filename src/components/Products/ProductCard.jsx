import { useContext } from "react";
import { DataProvider } from "../../context/DataContextProvider";

import { useState } from "react";
import { Button } from "../elements/Button";

export const ProductCard = ({ product }) => {
  const { upsertProduct } = useContext(DataProvider);

  const [productState, setProductState] = useState({ ...product, qty: 1 });
  const handleQty = (e) => {
    setProductState((prevData) => ({ ...prevData, qty: Number(e.target.value) }));
  };

  const handleAddNewProduct = () => {
    upsertProduct(productState);
  };

  return (
    <section className="w-full max-w-[350px] mx-auto max-h-[400px] shadow-md rounded-lg flex flex-col items-start justify-between pb-7 overflow-hidden">
      <img
        src={product.image_url}
        alt={`Image of ${product.name}`}
        className="w-full object-cover h-[250px]"
      />
      <div className="px-2 py-1">
        <h3 className="text-xl font-semibold text-gray-700">
          ${product.price}
        </h3>
        <p className="font-light">{product.name}</p>
      </div>
      <div className="w-full px-2 flex items-center justify-start gap-2">
        <select
          onChange={handleQty}
          name="qty"
          className="w-16 px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
          defaultValue={1}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
        <Button
          className="px-4 py-2 bg-black text-sm text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:ring-offset-1 "
          onClick={handleAddNewProduct}
        >
          Añadir al carrito
        </Button>
      </div>
    </section>
  );
};
