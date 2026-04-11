import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { ProtectedRoute } from "./ProtectedRoute";
import App from "../App";

/**
 * Rutas de la aplicación:
 *
 *  /login      → Página de login
 *  /register   → Página de registro
 *  /           → Home (protegida, requiere sesión)
 *  *           → Redirige a /login
 */
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<App />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
