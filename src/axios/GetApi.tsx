import axios from "axios"
import { useDispatch } from 'react-redux'
import { getCoust } from "../redux/coust/CoustSlice"
const GetApi = async () => {
    const dispatch = useDispatch()
    const data = await axios.get('https://63b68cc958084a7af3b56b5d.mockapi.io/api/coust');
    const action = data.data;
    dispatch(getCoust(action))
}

export default GetApi