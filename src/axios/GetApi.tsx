import instance from "./Axios"
import { setUserSignIn } from "../redux/user/UserSlice";
import { AppDispatch } from "../redux/Store";
import { addCoust, deleteCoust, setCoustSignIn, updateCoust } from "../redux/coust/CoustSlice";
export const GetApi = async (link: string) => {
    const data = await instance.get(link);
    return data.data
}
export const setCoust = () => async (dispatch: AppDispatch) => {
    const coust = await instance.get('/coust')
    dispatch(setCoustSignIn(coust.data))
}
export const deleteOneCoust = (id: string) => async (dispatch: AppDispatch) => {
    const data = await instance.delete(`/coust/` + id);
    dispatch(deleteCoust(data.data.id))
}
export const addOneCoust = (Header: object) => async (dispatch: AppDispatch) => {
    const data = await instance.post('/coust', Header)
    dispatch(addCoust(data.data))
}
export const putCoust = (id: string, Header: Object) => async (dispatch: AppDispatch) => {
    const data = await instance.put(`/coust/` + id, Header);
    dispatch(updateCoust({ id: id, data: data.data }))
}
export const setUser = () => async (dispatch: AppDispatch) => {
    const user = await instance.get("/user/2");
    dispatch(setUserSignIn(user.data));
};
