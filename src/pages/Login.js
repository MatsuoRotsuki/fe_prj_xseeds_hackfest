import React from 'react';
import { Affix, Button, Checkbox, Form, Input, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions';
=======
>>>>>>> 699a320e5fc9be80de1533e68aef323b9e483e58

const { Title } = Typography;

function Login() {

  const navigate = useNavigate();
<<<<<<< HEAD
  const dispatch = useDispatch();
  const onFinishLogin = (value) => {
    if (value.email === 'loc@gmail.com' 
      && value.password === '0358494928') {
        dispatch(actions.login.loginRequest(value));
        navigate('/');
      }
  }
=======
>>>>>>> 699a320e5fc9be80de1533e68aef323b9e483e58

  return (
    <div className='w-full bg-[#d9d9d9] wrapper h-[980px]'>
      <Affix offsetTop={160}>
        <div className='w-[562px] h-[462px] bg-white rounded-[20px] mx-auto'>
          <div className='flex flex-col items-center pt-20'>
            <Title level={1}>
              Log in
            </Title>
            <Form
<<<<<<< HEAD
              onFinish={onFinishLogin}
=======
              onFinish={(value) => {
                navigate('/');
                console.log(value);
              }}
>>>>>>> 699a320e5fc9be80de1533e68aef323b9e483e58
            >

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please input your email.' },
                ]}
              >
                <Input
                  prefix={<UserOutlined/>}
                  placeholder='Email' 
                />
              </Form.Item>
              
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: 'Please input your password.' }
                ]}
              >
                <Input.Password
                  placeholder='Password'
                  iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName='checked'
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
              >
                <Button
                  type='primary'
                  htmlType='submit'
                >
                  <span className='text-black'>Log in</span>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Affix>
    </div>
  )
}

export default Login