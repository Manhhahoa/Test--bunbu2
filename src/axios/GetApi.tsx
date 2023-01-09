import instance from "./Axios"
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

