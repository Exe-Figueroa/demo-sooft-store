import { HashRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import { Home } from "./Home";
import { DataContextProvider } from "../context/DataContextProvider";
import { ScrollTopButton } from "../components/ScrollTopButton";
import { Admin } from "./Admin";
import { Login } from "./Login";

export const App = () => {
  return (
    <DataContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </HashRouter>
      <ScrollTopButton />
      <ToastContainer />
    </DataContextProvider>
  );
};
