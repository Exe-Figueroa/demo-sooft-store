import { createContext, useState } from "react";

export const DataProvider = createContext();

export const DataCOntextProvider = () => {
  const [order, setOrder] = useState(null);
  return (
    <DataProvider.Provider value={''}>
      
    </DataProvider.Provider>
  );
};
