import { HashRouter, Routes, Route } from "react-router-dom";

import "./App.css";

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/admin" element={<h1>Admin</h1>} />
        <Route path="/order" element={<h1>order</h1>} />
      </Routes>
    </HashRouter>
  );
};
