import { TSchedule } from "../schedules/type";

interface TSeat  {
    id:number;
    schedule_id:number;
    column_value:number;
    row_value:number;
    schedule:TSchedule
}

export type {TSeat};
