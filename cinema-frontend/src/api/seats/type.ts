import { TSchedule } from "../schedules/type";

interface TSeat  {
    id:number;
    schedule_id:number;
    column_value:number;
    row_value:number;
    schedule:TSchedule
}

type TGetSeatsArgs = {room_id:string;movie_id:string}


export type {TSeat,TGetSeatsArgs};