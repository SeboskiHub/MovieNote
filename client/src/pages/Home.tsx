import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Grid } from "../components/Grid/Grid";
import { Navbar } from "../components/Navbar/Navbar";
import { MovieModal } from "../components/MovieModal/MovieModal";
import Footer from "../components/Footer/Footer";
import "../App.css";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string | null;
  vote_average?: number;
  release_date?: string;
  first_air_date?: string;
  overview?: string;
}

function Home() {
  const { mode, setMode, movies, tvShows, page, setPage, query, setQuery } = useMovies();

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const isMovies = mode === "movies";

  return (
    <>
      <Navbar />

      {/* Search + Tabs */}
      <div className="app-controls">
        <div className="app-search">
          <span className="app-search__icon">🔍</span>
          <input
            id="search-input"
            className="app-search__input"
            type="text"
            placeholder={isMovies ? "Buscar películas..." : "Buscar series..."}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="app-search__clear"
              onClick={() => setQuery("")}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

        {/* Mode toggle */}
        <div className="app-tabs">
          <button
            id="tab-movies"
            className={`app-tab ${isMovies ? "app-tab--active" : ""}`}
            onClick={() => setMode("movies")}
          >
            Películas
          </button>
          <button
            id="tab-tv"
            className={`app-tab ${!isMovies ? "app-tab--active" : ""}`}
            onClick={() => setMode("tv")}
          >
            Series
          </button>
        </div>
      </div>

      {/* Grid */}
      <Grid>
        {isMovies
          ? movies.map((m) => (
              <MovieCard
                key={m.id}
                title={m.title || "Sin título"}
                image={m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : "https://via.placeholder.com/500x750?text=Sin+imagen"}
                rating={m.vote_average || 0}
                date={m.release_date || "Fecha desconocida"}
                onClick={() => handleSelectMovie(m)}
              />
            ))
          : tvShows.map((t) => (
              <MovieCard
                key={t.id}
                title={t.name || "Sin título"}
                image={t.poster_path ? `https://image.tmdb.org/t/p/w500${t.poster_path}` : "https://via.placeholder.com/500x750?text=Sin+imagen"}
                rating={t.vote_average || 0}
                date={t.first_air_date || "Fecha desconocida"}
                onClick={() => handleSelectMovie(t)}
              />
            ))}
      </Grid>

      {/* Modal */}
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}

      {/* Pagination */}
      <div className="app-pagination">
        <button
          id="btn-prev"
          className="app-page-btn"
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
        >
          ← Anterior
        </button>
        <span className="app-page-num">Página {page}</span>
        <button
          id="btn-next"
          className="app-page-btn"
          onClick={() => setPage(page + 1)}
        >
          Siguiente →
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Home;