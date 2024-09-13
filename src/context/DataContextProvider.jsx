import { createContext, useState } from "react";

export const DataProvider = createContext();

export const DataContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [seeOrderModal, setSeeOrderModal] = useState(false);

  const cleanOrder = () => {
    setOrder([]);
  };

  const updateProductById = (newProduct) => {
    const newOrderUpdated = order.map((product) => {
      if (product.id === newProduct.id) {
        return newProduct.qty > 0 && newProduct.qty <= 10
          ? newProduct
          : product;
      } else {
        return product;
      }
    });
    setOrder(newOrderUpdated);
  };

  const addNewProduct = (newProduct) => {
    setOrder((prevValue) => [...prevValue, newProduct]);
  };

  const upsertProduct = (newProduct) => {
    const productExists = order.some((product) => product.id === newProduct.id);
    if (productExists) {
      updateProductById(newProduct);
    } else if (newProduct.qty > 0) {
      addNewProduct(newProduct);
    }
  };

  const deleteProductById = (productId) => {
    const newOrder = order.filter((product) => product.id !== productId);
    setOrder(newOrder);
  };

  const handleSeeOrderModal = (shouldBeVisible) => {
    setSeeOrderModal(shouldBeVisible);
  };

  const obj = {
    order,
    cleanOrder,
    addNewProduct,
    upsertProduct,
    updateProductById,
    deleteProductById,
    handleSeeOrderModal,
    seeOrderModal,
  };
  return <DataProvider.Provider value={obj}>{children}</DataProvider.Provider>;
};
