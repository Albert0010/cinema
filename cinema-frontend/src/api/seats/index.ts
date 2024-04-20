import {serverRequest} from "@/api";
import {TSeat} from "@/api/seats/type";


const getSeats = async (schedule_id:string) => {
    return await serverRequest<TSeat[]>("GET", `/seats_occupied`,{
        params: {
            schedule_id
        }
    });
}

const addSeat = async (schedule_id:number,column_value:number,row_value:number) => {
    return await serverRequest<any>("POST", `/seats_occupied`,{
        data:{
        schedule_id,
        column_value,
        row_value
    }});
}

export {getSeats,addSeat}
