import axios, {AxiosResponse} from "axios";

const serverRequest = <T>(method: string, url: string, data = {}, headers = {
    "Content-Type": "application/json",     
}):Promise<AxiosResponse<T>> => {
    return axios({
        method,
        url: process.env.NEXT_PUBLIC_APP_API_URL + url,
        ...data,
        headers
    });
}

export {serverRequest}
