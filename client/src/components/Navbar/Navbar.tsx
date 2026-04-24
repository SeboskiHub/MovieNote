import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <span className="logo-icon"></span>
        <h1> MovieNote </h1>
      </div>

      
      <div className="navbar-links">
        <button> Inicio </button>
        <button> Películas </button>
        <button> Mis Notas </button>
        <button> Carrito </button>
      </div>


      <div className="navbar-user">
        <button className="logout-btn"> Salir </button>
      </div>

    </nav>
  );
}