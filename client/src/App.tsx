import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Landing } from "./pages/Landing";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import Home from "./pages/Home";
import MisNotas from "./pages/MisNotas/MisNotas";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<MisNotas />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;