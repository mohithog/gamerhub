import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6c43aed24df244249240506c87a539d8",
  },
});

const apiClient = <T>(endpoint: string, requestConfig?: AxiosRequestConfig) => {
  return axiosInstance
    .get<FetchResponse<T>>(endpoint, requestConfig)
    .then((res) => res.data.results);
};

export default apiClient;
