import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function ProtectedRoute() {
  const { user, loading } = useAuth();

  // If Firebase is still verifying the token, show a loading state
  if (loading) {
    return (
      <div className="route-loading">
        <span className="route-spinner"></span>
      </div>
    );
  }

  // If not logged in, redirect to login page!
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the requested route
  return <Outlet />;
}
