import { useEffect, useState } from "react";
import type { Movie, TVShow } from "../types/movie";
import { getPopularMovies, getPopularTV, searchMovies, searchTV } from "../services/tmdb.service";

type Mode = "movies" | "tv";

export const useMovies = () => {
  const [mode, setMode] = useState<Mode>("movies");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvShows, setTVShows] = useState<TVShow[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce: espera 400ms antes de buscar
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 400);
    return () => clearTimeout(timer);
  }, [query]);

  // Reset page when mode or query changes
  useEffect(() => {
    setPage(1);
  }, [mode, debouncedQuery]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (debouncedQuery.trim()) {
          // Modo búsqueda
          if (mode === "movies") {
            const data = await searchMovies(debouncedQuery, page);
            setMovies(data);
          } else {
            const data = await searchTV(debouncedQuery, page);
            setTVShows(data);
          }
        } else {
          // Modo popular
          if (mode === "movies") {
            const data = await getPopularMovies(page);
            setMovies(data);
          } else {
            const data = await getPopularTV(page);
            setTVShows(data);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [mode, page, debouncedQuery]);

  return {
    mode,
    setMode,
    movies,
    tvShows,
    page,
    setPage,
    loading,
    query,
    setQuery,
  };
};