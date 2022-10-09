import React from 'react'
import moment from 'moment'

function DetailCard({createdBy, createdDate}) {
  return (
    <div className='rounded-[10px] bg-white w-[179px] h-[97px] shadow-sm border-gray-400 flex flex-col justify-center items-center m-5'>
      <div>
        Teacher: {createdBy?.firstName} {createdBy?.lastName}
      </div>
      <div>
        Date: {moment(createdDate).format('YYYY/MM/DD')}
      </div>
    </div>
  )
}

export default DetailCard