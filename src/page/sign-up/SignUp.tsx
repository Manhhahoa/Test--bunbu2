import React from 'react';
import '../sign-up/SignUp.scss'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { UserSubmitForm, schema } from "./yupSubmitUser/YupSubmitUser";
import { yupResolver } from "@hookform/resolvers/yup";
const App: React.FC = () => {
    const nav = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>({ resolver: yupResolver(schema) });
    const onSubmit = (data: UserSubmitForm) => {
        nav('/sign-in')
        reset(data)
    }
    return (
        <div className='sign-up'>
            <div className='form-signup dflex-center boder-us10'>
                <h1>Trang đăng ký</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="gmail">Nhập Email</label>
                    <input {...register("gmail")}
                        placeholder='nhap gmail' className='w-100 fz-low9' name='gmail' id='gmail'
                        style={errors.gmail && { border: '1px solid red' }}
                    />
                    <p>{errors.gmail?.message}</p>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password")}
                        placeholder='nhap password' className='w-100 fz-low9' name='password' id='password'
                        style={errors.password && { border: '1px solid red' }}
                    />
                    <p>{errors.password?.message}</p>
                    <button className='p8-12 boder-us10 cursor-poiter' type='submit'>Sign-Up</button>
                </form>
                <p className="to-signin fz-low9">đã có tài khoản ? <Link to={'/sign-in'}>Đăng nhập</Link></p>
            </div>
        </div >
    );
};

export default App;
