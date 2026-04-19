import { useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";
import { useAuth } from "../hooks/useAuth";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { Grid } from "../components/Grid/Grid";
import "../App.css";

function Home() {
  const { mode, setMode, movies, tvShows, page, setPage, query, setQuery } = useMovies();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const isMovies = mode === "movies";

  return (
    <>
      {/* Header */}
      <header className="app-header">
        <div className="app-header__left">
          <span className="app-header__logo">🎬</span>
          <h1 className="app-header__title">{isMovies ? "Películas" : "Series"}</h1>
        </div>
        <div className="app-header__right">
          <span className="app-header__email">{user?.email}</span>
          <button id="logout-btn" className="app-header__logout" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </header>

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
                title={m.title}
                image={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                rating={m.vote_average}
                date={m.release_date}
              />
            ))
          : tvShows.map((t) => (
              <MovieCard
                key={t.id}
                title={t.name}
                image={`https://image.tmdb.org/t/p/w500${t.poster_path}`}
                rating={t.vote_average}
                date={t.first_air_date}
              />
            ))}
      </Grid>

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
    </>
  );
}

export default Home;