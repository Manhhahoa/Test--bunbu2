import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCoust, setUser } from "../../axios/GetApi";
import { useAppDispatch, useAppSelector } from "../../redux/Hook";
import './SignIn.scss'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSubmitForm, schema } from "../sign-up/yupSubmitUser/YupSubmitUser";
const SignIn = () => {
    const {
        register,
        handleSubmit,
        clearErrors,
        formState: { errors }
    } = useForm<UserSubmitForm>({ resolver: yupResolver(schema), });
    const nav = useNavigate()
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const signIn = (data: UserSubmitForm) => {
        console.log(data)
        dispatch(setUser())
        dispatch(setCoust())
    }
    useEffect(() => {
        if (user.id) {
            nav('/')
        }
    })
    return (
        <div className='sign-in'>
            <div className='form-signin dflex-center boder-us10'>
                <h1>Trang đăng nhập</h1>
                <form onSubmit={handleSubmit(signIn)}>
                    <label htmlFor="gmail">Nhập Email</label>
                    <input {...register("gmail")}
                        placeholder='nhap gmail' className='w-100 fz-low9' name='gmail' id='gmail'
                        style={errors.gmail && { border: '1px solid red' }}
                        onClick={() => {
                            clearErrors('gmail')
                        }}
                    />
                    <p>{errors.gmail?.message}</p>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password")}
                        placeholder='nhap password' className='w-100 fz-low9' name='password' id='password'
                        style={errors.password && { border: '1px solid red' }}
                        onClick={() => {
                            clearErrors('password')
                        }}
                    />
                    <p>{errors.password?.message}</p>
                    <br />
                    <button className='p8-12 boder-us10 cursor-poiter' type='submit'>Sign-in</button>
                </form>
                <p className="to-signup fz-low9">chưa có tài khoản ? <Link to={'/sign-up'}>Đăng ký</Link></p>
            </div>
        </div >
    )
}

export default SignIn
