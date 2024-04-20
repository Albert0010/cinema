import {TMovie} from "@/api/movies/type";
import { TRoom } from "../rooms/type";

type TSchedule = {
    id: number;
    movie_id: number;
    room_id: number;
    start_time: string;
    end_time: string;
    movie:TMovie;
    room:TRoom
}

export type {TSchedule}
