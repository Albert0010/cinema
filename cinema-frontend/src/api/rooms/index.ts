import {serverRequest} from "@/api";
import {TRoom} from "@/api/rooms/type";

const getRooms = async () => {
    return await serverRequest<TRoom[]>("GET", "/rooms");
}

export {getRooms}
