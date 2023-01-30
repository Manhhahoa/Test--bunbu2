import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCoust, setUser } from "../../axios/GetApi";
import { useAppDispatch, useAppSelector } from "../../redux/Hook";
import { Button, Checkbox, Form, Input } from 'antd';
import '.././sign-in/Sign-In.scss'
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
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="sign-in">
            <div className="form-signin">
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={signIn}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={
                            [
                                { required: true, message: 'Please input your username!' },
                                {
                                    type: 'email',
                                    message: 'Please enter a valid email'
                                },
                                { whitespace: true },
                            ]
                        }
                        hasFeedback
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={
                            [
                                { required: true, message: 'Please input your password!' },
                                { min: 4, message: 'password must be at least 4 characters' },
                            ]
                        }
                        hasFeedback
                    >

                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Sign-In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default SignIn
