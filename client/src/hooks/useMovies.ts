import { useEffect, useState } from "react";
import type { Movie, TVShow } from "../types/movie";
import { getPopularMovies, getPopularTV } from "../services/tmdb.service";

type Mode = "movies" | "tv";

export const useMovies = () => {
  const [mode, setMode] = useState<Mode>("movies");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [tvShows, setTVShows] = useState<TVShow[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (mode === "movies") {
          const data = await getPopularMovies(page);
          setMovies(data);
        } else {
          const data = await getPopularTV(page);
          setTVShows(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [mode, page]);

  return {
    mode,
    setMode,
    movies,
    tvShows,
    page,
    setPage,
    loading,
  };
};