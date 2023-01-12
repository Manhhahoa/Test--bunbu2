import instance from "./Axios"
import { getUser } from "../redux/user/UserSlice";
export const GetApi = async (link: string) => {
    const data = await instance.get(link);
    return data.data

}
export const DeleteApi = async (id: number) => {
    const data = await instance.delete(`/coust/${id}`);
    return data.data
}
export const PutApi = async (id: number) => {
    const data = await instance.put(`/coust/${id}`, { Headers: {} });
    return data.data
}
export const setUser = async () => {
    const user = await instance.get('/user/2')
    return getUser(user.data)
}


