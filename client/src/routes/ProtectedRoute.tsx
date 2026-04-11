import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Protege rutas que requieren sesión activa.
 * Si el usuario no está autenticado, redirige a /login.
 * Mientras Firebase verifica la sesión (loading), muestra nada (o un spinner).
 */
export function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="route-loading">
        <span className="route-spinner" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
