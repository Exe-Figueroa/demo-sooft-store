import { HashRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { DataContextProvider } from "../context/DataContextProvider";
import { ScrollTopButton } from "../components/ScrollTopButton";
import { Admin } from "./Admin";

export const App = () => {
  return (
    <DataContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </HashRouter>
      <ScrollTopButton/>
    </DataContextProvider>
  );
};
