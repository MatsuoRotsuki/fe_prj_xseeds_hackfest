import React from 'react'
import { Link } from 'react-router-dom'

function TOPSidebar() {
  return (
    <div className='text-xl w-[238px] h-[900px] bg-white shadow-sm shadow-black top-[80px]'>
      <Link to='/takecontest'>To Test</Link>
    </div>
  )
}

export default TOPSidebar