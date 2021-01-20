import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {URL_LOGIN} from '../../config_api'
import axios from 'axios'
import qs from 'qs'


const Login = () => {
    const onFinish = values => {
        axios({
            method: 'post',
            url: `${URL_LOGIN}/api/login`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            data: qs.stringify(values)
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
        
    };

    return (
        <div className="login_parent">
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >   
                <h3 className="text-center mb-4">Đăng nhập</h3>
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập tên tài khoản!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Vui lòng nhập tên mật khẩu!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Nhớ đăng nhập</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                    Quên mật khẩu
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Đăng nhập
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login