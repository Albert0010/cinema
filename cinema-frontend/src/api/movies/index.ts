import {serverRequest} from "@/api";
import { TMovie } from "./type";

const getMovies = async () => {
    return await serverRequest<TMovie[]>("GET", "/movies");
}

export {getMovies}
