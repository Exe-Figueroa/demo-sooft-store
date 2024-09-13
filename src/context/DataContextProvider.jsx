import { createContext, useState } from "react";

export const DataProvider = createContext();

export const DataContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [seeOrderModal, setSeeOrderModal] = useState(false);

  const cleanOrder = () => {
    setOrder([]);
  };

  const updateProductByIndex = (newProduct, index) => {
    const firstPart = order.slice(0, index);
    const secondPart = order.slice(index + 1, order.length);
    setOrder([...firstPart, newProduct, ...secondPart]);
  };

  const addNewProduct = (newProduct) => {
    setOrder((prevValue) => [...prevValue, newProduct]);
  };

  const upsertProduct = (newProduct) => {
    const indexProduct = order.findIndex((p) => p?.id === newProduct.id);
    if (indexProduct >= 0) {
      updateProductByIndex(newProduct, indexProduct);
    } else if (newProduct.qty > 0) {
      addNewProduct(newProduct);
    }
  };

  const deleteProductByIndex = (productIndex) => {
    const newOrder = order.filter((_, index) => index !== productIndex);
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
    updateProductByIndex,
    deleteProductByIndex,
    handleSeeOrderModal,
    seeOrderModal,
  };
  return <DataProvider.Provider value={obj}>{children}</DataProvider.Provider>;
};
