import { createContext, useEffect, useState } from "react";
import { AuthService } from "../auth-management/application/auth.service";
import { AuthSupabaseRepository } from "../auth-management/infraestructure/auth.repository";
import { supabaseClient } from "../libs/supabaseConnection";

export const DataProvider = createContext();

const authService = new AuthService(new AuthSupabaseRepository(supabaseClient));

export const DataContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [seeOrderModal, setSeeOrderModal] = useState(false);
  const [seeProductForm, setSeeProductForm] = useState(false);
  const [userSession, setUserSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);

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
  const handleSeeProductForm = (shouldBeVisible) => {
    setSeeProductForm(shouldBeVisible);
  };

  const getUserSession = async () => {
    const session = await authService.getUser();
    if (session) {
      setUserSession(session);
    }
    setLoadingSession(false);
  };
  const logOut = async () => {
    await authService.logOut();
    setUserSession(null);
  };

  const newUserSession = async (session) => {
    setUserSession(session);
  };

  useEffect(() => {
    getUserSession();
  }, []);

  const obj = {
    order,
    cleanOrder,
    addNewProduct,
    upsertProduct,
    updateProductById,
    deleteProductById,
    handleSeeOrderModal,
    seeOrderModal,
    getUserSession,
    logOut,
    newUserSession,
    userSession,
    loadingSession,
    handleSeeProductForm,
    seeProductForm,
  };
  return <DataProvider.Provider value={obj}>{children}</DataProvider.Provider>;
};
