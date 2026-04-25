import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Landing } from "./pages/Landing";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import Home from "./pages/Home";
import MisNotas from "./pages/MisNotas/MisNotas";
import { Checkout } from "./pages/Checkout/Checkout";
import { PurchasesHistory } from "./pages/PurchasesHistory/PurchasesHistory";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { CartSidebar } from "./components/CartSidebar/CartSidebar";
import { CartProvider } from "./context/CartContext";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CartSidebar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          
          {/* 🛡️ Protected Private Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/notes" element={<MisNotas />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/history" element={<PurchasesHistory />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;