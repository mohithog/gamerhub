// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from "./useData";
import genres from "../data/genres";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
// interface FetchGenreResponse{
//     count: number;
//     results: Genres[]
// }


// const useGenres = () => useData<Genres>("/genres");
const useGenres = () => ({ data: genres, isLoading: false, error: null });
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

export default useGenres;
