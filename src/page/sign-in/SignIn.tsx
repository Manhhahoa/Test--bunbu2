import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../axios/GetApi";
import { useAppDispatch, useAppSelector } from "../../redux/Hook";
const SignIn = () => {
    const nav = useNavigate()
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const signIn = () => {
        setUser().then(user => dispatch(user));
    }
    useEffect(() => {
        if (user.id) {
            nav('/')
        }
    }, [nav, user])
    return (
        <div>
            <button onClick={signIn}> Đăng nhập</button>
        </div>
    )
}

export default SignIn
