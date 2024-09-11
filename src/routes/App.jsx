import { HashRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<h1>Admin</h1>} />
        <Route path="/order" element={<h1>order</h1>} />
      </Routes>
    </HashRouter>
  );
};
