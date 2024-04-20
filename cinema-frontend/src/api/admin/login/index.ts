import { serverRequest } from "@/api";

const loginAdmin = async (password: string) => {
    return await serverRequest<{message:string;status:number}>("POST", "/admin", { data : {password} });
}

export {loginAdmin}