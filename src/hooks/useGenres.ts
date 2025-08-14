import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient
      .get<FetchResponse<Genres>>("/genres")
      .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres
  });
};
export default useGenres;
