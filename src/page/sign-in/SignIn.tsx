import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCoust, setUser } from "../../axios/GetApi";
import { useAppDispatch, useAppSelector } from "../../redux/Hook";
const SignIn = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const signIn = () => {
        dispatch(setUser())
        dispatch(setCoust())
    }
    useEffect(() => {
        if (user.id) {
            nav('/')
        }
    })
    return (
        <div>
            <button onClick={signIn}> Đăng nhập</button>
        </div>
    )
}

export default SignIn
