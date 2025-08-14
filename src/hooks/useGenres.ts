import genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
// interface FetchGenreResponse {
//   count: number;
//   results: Genres[];
// }

// const useGenres = () => useData<Genres>("/genres");
// {
//   const [genres, setGenres] = useState<Genres[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//       .then((res) => {
//         setGenres(res.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return { genres , error , isLoading };

// }

//                specific hook for fetching data using a generic hook
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

//                     replacing with ReactQuery
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
