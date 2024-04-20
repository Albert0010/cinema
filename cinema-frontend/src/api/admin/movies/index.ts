import { serverRequest } from "@/api";
import { TArgs } from "./type";
import { TMovie } from "@/api/movies/type";

const createMovies = async (data:TArgs) => {
    return await serverRequest<TMovie>("POST", "/movies", { data });
}

const editMovies = async ({id}:{id:number},data:TArgs) => {
    return await serverRequest<TMovie>("PATCH", `/movies/${id}`, { data });
}

const deleteMovies = async (data:{id:number}) => {
    return await serverRequest<{status:number;message:string;}>("DELETE", "/movies", { data });
}

export {createMovies,deleteMovies,editMovies}