import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Components from "./pages/Components";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Animation from "./pages/Animation";
import ForwardToHome from "./pages/ForwardToHome";
import AppLayout from "./layouts/AppLayout";
import Todos from "./pages/Todos";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import Login from "./pages/Login";

import { fetchProducts } from "./data/products";

function App() {
  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])
  const [token, setToken] = useState(null)
  const [role, setRole] = useState(null)

  useEffect(() => setProducts(fetchProducts()), [])

  const handleLogout = () => {
    setToken(null)
    setRole(null)
    setCarts([])
  }

  // ถ้ายังไม่ได้ login ให้แสดงหน้า Login
  if (!token) {
    return (
      <BrowserRouter basename="/csi205/">
        <div id="app-container">
          <Login setToken={setToken} setRole={setRole} />
        </div>
      </BrowserRouter>
    )
  }

  // ถ้า login แล้ว ให้แสดงหน้าหลัก
  return (
    <BrowserRouter basename="/csi205/">
      <Routes>
        <Route element={<AppLayout products={products} carts={carts} role={role} handleLogout={handleLogout} />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="components" element={<Components />} />
          <Route path="animation" element={<Animation />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="todos" element={<Todos />} />
          <Route path="*" element={<ForwardToHome />} />
          <Route path="products" element={<Products products={products} carts={carts} setCarts={setCarts} />} />
          <Route path="carts" element={<Carts carts={carts} setCarts={setCarts} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;