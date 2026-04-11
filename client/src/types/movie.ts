export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
  release_date: string;
}

export interface TVShow {
  id: number;
  name: string;
  poster_path: string | null;
  vote_average: number;
  first_air_date: string;
}

export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}