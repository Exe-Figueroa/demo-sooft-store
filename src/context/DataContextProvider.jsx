import { createContext, useState } from "react";

export const DataProvider = createContext(); // .Consumer .Provider

export const DataContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  console.log(order);
  
  const cleanOrder = ()=>{
    setOrder([]);
  }
  const addNewProduct = (product)=> {
    setOrder(prevValue => [...prevValue, product])
  }
  const obj = { order, cleanOrder, addNewProduct }
  return (
    <DataProvider.Provider value={obj}>
      {children}
    </DataProvider.Provider>
  );
};
