import React from 'react';
import '../sign-up/SignUp.scss'
import { useForm } from 'react-hook-form'
import { FormatInputPathObject } from 'path';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
    const nav = useNavigate()
    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        formState: { errors }
    } = useForm();
    const onSubmit = (data: FormatInputPathObject) => {
        nav('/sign-in')
        reset(data)
    }
    return (
        <div className='sign-up'>
            <div className='form-signup dflex-center boder-us10'>
                <h1>Trang đăng ký</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="gmail">Nhập Email</label>
                    <input {...register("gmail",
                        {
                            required: {
                                value: true, message: 'not a valid email'
                            },
                            minLength: 4,
                            pattern: /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/ig
                        }
                    )}
                        placeholder='nhap gmail' className='w-100 fz-low9' name='gmail' id='gmail'
                        style={errors.gmail && { border: '1px solid red' }}
                        onClick={() => {
                            clearErrors('gmail')
                        }}

                    />
                    {errors.gmail && <p>sai định dạng </p>}
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" {...register("password",
                        {
                            required: true,
                            minLength: 5
                        }
                    )}
                        placeholder='nhap password' className='w-100 fz-low9' name='password' id='password'
                        style={errors.password && { border: '1px solid red' }}
                        onClick={() => {
                            clearErrors('password')
                        }}
                    />
                    {errors.password && <p> mật khẩu nhiều hơn 5 kí tự</p>}
                    {/* <br />
                    <label htmlFor="repass">Nhập lại Password</label>
                    <input type="password" {...register("repass",
                        {
                            required: true,
                            minLength: 5
                        }
                    )}
                        placeholder='nhap repass' className='w-100 fz-low9' name='repass' id='repass'
                        style={errors.repass && { border: '1px solid red' }}
                        onClick={() => {
                            clearErrors('repass')
                        }}
                    />
                    {errors.repass && <p> Mật khẩu không khớp </p>} */}
                    <br />
                    <button className='p8-12 boder-us10' type='submit'>Sign-Up</button>
                </form>
            </div>
        </div >
    );
};

export default App;
