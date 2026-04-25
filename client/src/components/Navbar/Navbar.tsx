import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../context/CartContext";

export function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { setCartOpen, cartItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- Smart Navbar: hide on scroll down, show on scroll up ---
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nav = navRef.current;
      if (!nav) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN → hide
        nav.classList.add("navbar--hidden");
      } else {
        // Scrolling UP → show
        nav.classList.remove("navbar--hidden");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // -----------------------------------------------------------

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav ref={navRef} className="navbar">

      {/* Logo */}
      <div className="navbar-logo">
        <span className="logo-icon"></span>
        <h1>MovieNote</h1>
      </div>

      {/* Links */}
      <div className={`navbar-links ${isMobileMenuOpen ? "navbar-links--open" : ""}`}>

        <button onClick={() => navigate("/home")}>
          Inicio
        </button>

        <button onClick={() => navigate("/notes")}>
          Mis Notas
        </button>

        <button onClick={() => navigate("/history")}>
          Historial
        </button>

        <button className="cart-nav-btn" onClick={() => setCartOpen(true)}>
          Carrito
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </button>

      </div>

      {/* User & Mobile Toggle */}
      <div className="navbar-right">
        {user && user.email && (
          <span className="navbar-email">{user.email}</span>
        )}
        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Salir
        </button>
        <button 
          className="hamburger-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menú"
        >
          ☰
        </button>
      </div>

    </nav>
  );
}