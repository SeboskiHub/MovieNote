import "./MovieModal.css";
import { useState } from "react";
import { Notes } from "../Notes/Notes";
import { useCart } from "../../context/CartContext";

type Props = {
  movie: any;
  onClose: () => void;
};

export function MovieModal({ movie, onClose }: Props) {
  const [showNotes, setShowNotes] = useState(false);
  const { addToCart } = useCart();

  const rating = movie.vote_average ? Number(movie.vote_average).toFixed(1) : null;
  const year = (movie.release_date || movie.first_air_date || "").slice(0, 4);
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=Sin+imagen";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>

        {/* ── Close button ── */}
        <button className="close-btn" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {/* ── Body: poster + info ── */}
        <div className="modal-body">

          {/* Poster */}
          <div className="modal-poster-wrap">
            <img
              className="modal-poster"
              src={posterUrl}
              alt={movie.title || movie.name}
            />
            {/* Gradient scrim at bottom of poster */}
            <div className="modal-poster-scrim" />
          </div>

          {/* Info panel */}
          <div className="modal-info">

            <h2 className="modal-title">{movie.title || movie.name}</h2>

            {/* Badges row */}
            <div className="modal-badges">
              {rating && (
                <span className="badge badge--rating">
                  ⭐ {rating}
                </span>
              )}
              {year && (
                <span className="badge badge--year">
                  📅 {year}
                </span>
              )}
              <span className="badge badge--price">
                💳 $20.000
              </span>
            </div>

            {/* Overview */}
            <p className="modal-overview">
              {movie.overview || "Sin descripción disponible."}
            </p>

            {/* Actions */}
            {!showNotes && (
              <div className="modal-actions">
                <button
                  className="modal-btn modal-btn--note"
                  onClick={() => setShowNotes(true)}
                >
                  ✏️ Agregar nota
                </button>
                <button 
                  className="modal-btn modal-btn--cart"
                  onClick={() => addToCart(movie)}
                >
                  🛒 Agregar al carrito
                </button>
              </div>
            )}

            {/* Inline Notes panel */}
            {showNotes && (
              <div className="modal-notes-panel">
                <Notes movie={movie} onClose={() => setShowNotes(false)} />
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
