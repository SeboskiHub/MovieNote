import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Navbar() {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <span className="logo-icon"></span>
        <h1>MovieNote</h1>
      </div>

      {/* Links */}
      <div className="navbar-links">

        <button onClick={() => navigate("/home")}>
          Inicio
        </button>

        <button onClick={() => navigate("/home")}>
          Películas
        </button>

        <button onClick={() => navigate("/notes")}>
          Mis Notas
        </button>

        <button onClick={() => navigate("/cart")}>
          Carrito
        </button>

      </div>

      {/* User */}
      <div className="navbar-user">
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Salir
        </button>
      </div>

    </nav>
  );
}