import React from 'react'
import { Space, notification } from 'antd';
import { CaretDownOutlined, NotificationOutlined } from '@ant-design/icons';
import AvatarCard from './AvatarCard';

function Navbar() {
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
          <Space>
            <AvatarCard />
            <CaretDownOutlined/>
          </Space>
        </div>
      </Space>
    </div>
  )
}

export default Navbar