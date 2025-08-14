import axios from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[]
}

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: '6c43aed24df244249240506c87a539d8'
    }
})