import genres from "../data/genres";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient<Genres>("/genres"),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres
  });
};
export default useGenres;
