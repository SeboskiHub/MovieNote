import "./MovieModal.css";
import { useState } from "react";
import { Notes } from "../Notes/notes";

type Props = {
  movie: any;
  onClose: () => void;
};

export function MovieModal({ movie, onClose }: Props) {

  // Estado para mostrar Notes
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name}
        />

        <h2>{movie.title || movie.name}</h2>

        <p>{movie.overview}</p>

        <h3>$ 20.000</h3>

        <div className="modal-actions">

        
          <button onClick={() => setShowNotes(true)}>
            Agregar nota
          </button>

          <button>
            Agregar al carrito
          </button>

        </div>

  
        {showNotes && (
          <Notes
            movie={movie}
            onClose={() => setShowNotes(false)}
          />
        )}

      </div>
    </div>
  );
}
