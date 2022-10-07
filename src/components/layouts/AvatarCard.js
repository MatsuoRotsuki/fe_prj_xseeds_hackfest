import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd'
import React from 'react'

function AvatarCard({ user }) {
  return (
    <Space size="middle" direction='horizontal'>
      <Avatar size={40} icon={<UserOutlined/>} />
      <div className='flex flex-col text-black hover:text-blue-400'>
        <span className='text-xl'>Name</span>
        <span className='text-xs'>RoleRole</span>
      </div>
    </Space>
  )
}

export default AvatarCard;