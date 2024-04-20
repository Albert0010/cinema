import {serverRequest} from "@/api";


const addTicket = async (schedule_id:number,name:string,email:string) => {
    return await serverRequest<any>("POST", `/ticket`,{
        data:{
        schedule_id,
        name,
        email
    }});
}

export {addTicket}
