import axios, {AxiosResponse} from "axios";
import { Activity } from "../models/Activity";
import { Update } from "@mui/icons-material";

const sleep = (delay:number)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,delay)
    }) 
}
axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async response=>{
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response:AxiosResponse<T>) =>response.data;
const requests = {
    get:<T>(url:string)=>axios.get<T>(url).then(responseBody),
    del:<T>(url:string)=>axios.delete<T>(url).then(responseBody),
    put:<T>(url:string,body:{})=>axios.put<T>(url,body).then(responseBody),
    post:<T>(url:string,body:{})=>axios.post<T>(url,body).then(responseBody),
}

const Activities ={
    list:()=>requests.get<Activity[]>('/activities'),
    details:(id:string)=>requests.get<Activity>(`/activities/${id}`),
    create:(activity:Activity)=>requests.post<Activity>('/activities',activity),
    delete:(id:string)=>requests.del<void>(`/activities/${id}`),
    update:(activity:Activity)=>requests.put(`/activities`,activity)
}
const agent={
    Activities
}
export default agent;