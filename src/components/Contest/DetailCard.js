import React from 'react'

function DetailCard({question}) {
  return (
    <div className='rounded-[10px] bg-white w-[179px] h-[97px] shadow-sm border-gray-400 flex flex-col justify-center items-center'>
      <div>
        Teacher: Phuong Sensei
      </div>
      <div>
        Date: 11/01/2022
      </div>
    </div>
  )
}

export default DetailCard