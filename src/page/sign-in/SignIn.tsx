import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { GetApi } from "../../axios/GetApi";
import { getUser } from "../../redux/user/UserSlice";
const SignIn = () => {
    const nav = useNavigate()
    const dispatch = useDispatch();
    const signIn = async () => {
        const action = await GetApi('/user')
        dispatch(getUser(action))
        nav('/')
    }
    return (
        <div>
            <button onClick={signIn}> Đăng nhập</button>
        </div>
    )
}

export default SignIn
