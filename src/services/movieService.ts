import axios from "axios";
import type { AxiosResponse } from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  results: Movie[];
}

const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response: AxiosResponse<MoviesResponse> = await axios.get(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        language: "en-US",
        include_adult: false,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );

  return response.data.results;
};
