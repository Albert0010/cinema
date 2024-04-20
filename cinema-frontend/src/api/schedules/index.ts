import {serverRequest} from "@/api";
import {TSchedule} from "@/api/schedules/type";

const getRoomSchedule = async (room_id:string) => {
    return await serverRequest<TSchedule[]>("GET", `/schedules?room_id=${room_id}`);
}
const getSchedule = async (schedule_id:string) => {
    return await serverRequest<TSchedule>("GET", `/schedules/${schedule_id}`);
}

export {getRoomSchedule,getSchedule}
