import React from 'react'
import Navbar from './Navbar'
import TOPSidebar from './TOPSidebar';
import { Affix } from 'antd';

function HomeLayout({children}) {
  return (
    <div className='flex flex-col bg-[#d9d9d9] w-full'>
      <Affix offsetTop={0}>
        <Navbar />
      </Affix>
      <div className='h-[900px] flex flex-row'>
        <div>
          <TOPSidebar/>
        </div>
        <div className='w-full wrapper flex flex-col overflow-y-auto items-center p-3'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default HomeLayout