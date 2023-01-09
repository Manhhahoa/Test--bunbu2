import { useDispatch } from 'react-redux'
import { getCoust } from "../redux/coust/CoustSlice"
import instance from "./Axios"
export const GetApi = async () => {
    const dispatch = useDispatch()
    const data = await instance.get('/api/coust');
    const action = data.data;
    dispatch(getCoust(action))
}
export const DeleteApi = async (id: number) => {
    const data = await instance.delete(`/api/coust/${id}`);
    return data.data
}
export const PutApi = async (id: number) => {
    const data = await instance.put(`/api/coust/${id}`, { Headers: {} });
    return data.data
}

