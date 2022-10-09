import React from 'react'
import { Space, notification, Menu, Dropdown } from 'antd';
import { CaretDownOutlined, NotificationOutlined } from '@ant-design/icons';
import AvatarCard from './AvatarCard';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const menu = (
    <Menu
      items={[
        {
          key: 1,
          label: (
            <div 
              onClick={() => {
                dispatch(actions.logout.logout(), {})
                navigate('/login');
              }}>
              Log out
            </div>
          )
        }
      ]}
    />
  )
  
  return (
    <div className='w-full shadow-sm shadow-gray-500 h-20 bg-white flex flex-row justify-between z-10'>
      <div className='my-auto ml-12 text-2xl'>
        APP NAME
      </div>
      <Space direction='horizontal' size={50}>
        <div className='flex justify-center items-center hover:text-blue-400'
          onClick={() => {
            notification.open({
              message:'Notifcation',
              description:'No notifcation.'
            });
          }}
        >
          <NotificationOutlined className="text-3xl"/>
        </div>
        <div className='flex items-center mr-12 hover:text-blue-400'>
          <Dropdown overlay={menu}>
            <Space>
              <AvatarCard />
              <CaretDownOutlined/>
            </Space>
          </Dropdown>
        </div>
      </Space>
    </div>
  )
}

export default Navbar