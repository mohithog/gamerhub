import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient<Platform>("/platforms/lists/parents"),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });

export default usePlatforms;
