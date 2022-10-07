import React from 'react';
import { Affix, Button, Checkbox, Form, Input, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

function Login() {

  const navigate = useNavigate();

  return (
    <div className='w-full bg-[#d9d9d9] wrapper h-[980px]'>
      <Affix offsetTop={160}>
        <div className='w-[562px] h-[462px] bg-white rounded-[20px] mx-auto'>
          <div className='flex flex-col items-center pt-20'>
            <Title level={1}>
              Log in
            </Title>
            <Form
              onFinish={(value) => {
                navigate('/');
                console.log(value);
              }}
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