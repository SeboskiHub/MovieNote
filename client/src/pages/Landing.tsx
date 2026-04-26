import { useNavigate } from "react-router-dom"; // Hook que permite navegar entre rutas sin recargar la página
import LiquidEther from '../services/LiquidEther';
import ASCIIText from '../services/ASCIIText';
import "./Landing.css";

export function Landing() { // Componente principal de la pantalla inicial

  const navigate = useNavigate(); // Creamos la función que nos permite redirigir a otras rutas

  return (
    <div className="landing">
      {/* Background canvas */}
      <div className="landing-background">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <LiquidEther
            colors={['#5227FF', '#FF9FFC', '#B497CF']}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      </div>

      {/* Foreground content */}
      <div className="landing-content">
        <div style={{ position: 'relative', width: '100%', height: '180px', marginBottom: '10px' }}>
          <ASCIIText
            text="MovieNote"
            enableWaves
            asciiFontSize={3}
            textFontSize={1000}
          />
        </div>
        <p>Las películas no solo se ven, se sienten.<br/>
          Movie Note te permite guardar cada emoción para que puedas volver a ellas cuando lo necesites.</p>
        <button className="landing-btn" onClick={() => navigate("/login")}>
          Empezar
        </button>
      </div>
    </div>
  );
}