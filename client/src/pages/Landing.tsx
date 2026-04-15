import { useNavigate } from "react-router-dom"; // Hook que permite navegar entre rutas sin recargar la página

export function Landing() { // Componente principal de la pantalla inicial

  const navigate = useNavigate(); // Creamos la función que nos permite redirigir a otras rutas

  return (
    <div className="landing"> 

      <h1> MovieNote </h1> 

      <p>Las películas no solo se ven, se sienten.
        Movie Note te permite guardar cada emoción para que puedas volver a ellas cuando lo necesites.</p> {}

      <button
        onClick={() => navigate("/login")} // Cuando el usuario hace click → lo llevamos al login
      >
        Empezar
      </button>

    </div>
  );
}