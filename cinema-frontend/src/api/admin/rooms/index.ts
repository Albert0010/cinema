import { serverRequest } from "@/api";
import { TArgs } from "./type";
import { TRoom } from "@/api/rooms/type";

const createRooms = async (data:TArgs) => {
    return await serverRequest<TRoom>("POST", "/rooms", { data });
}

const editRooms = async ({id}:{id:number},data:TArgs) => {
    return await serverRequest<TRoom>("PATCH", `/rooms/${id}`, { data });
}

const deleteRooms = async (data:{id:number;}) => {
    return await serverRequest<{status:number;message:string;}>("DELETE", "/rooms", { data });
}

export {createRooms,deleteRooms,editRooms}