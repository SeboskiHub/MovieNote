const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

import type { Movie, TVShow, TMDBResponse } from "../types/movie";

export const getPopularMovies = async (page: number): Promise<Movie[]> => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error al obtener películas");
  }

  const data: TMDBResponse<Movie> = await response.json();
  return data.results;
};

export const getPopularTV = async (page: number): Promise<TVShow[]> => {
  const url = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=es-ES&page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error al obtener series");
  }

  const data: TMDBResponse<TVShow> = await response.json();
  return data.results;
};

export const searchMovies = async (query: string, page: number): Promise<Movie[]> => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=${page}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error al buscar películas");
  const data: TMDBResponse<Movie> = await response.json();
  return data.results;
};

export const searchTV = async (query: string, page: number): Promise<TVShow[]> => {
  const url = `${BASE_URL}/search/tv?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(query)}&page=${page}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Error al buscar series");
  const data: TMDBResponse<TVShow> = await response.json();
  return data.results;
};