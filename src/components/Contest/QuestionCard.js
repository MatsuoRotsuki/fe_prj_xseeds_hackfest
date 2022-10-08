import React from 'react'
import { Typography } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const alphabetOrder = ['A', 'B', 'C', 'D', 'E'];

function QuestionCard({question, index}) {
  return (
    <div className='w-[910px] rounded-[20px] bg-white shadow-sm shadow-black mt-10'>
      <div className='flex flex-col justify-center p-6'>
        <div className='flex flex-row justify-between'>
          <Typography>Question {index}: { question?.questionContent }</Typography>
          <div className='text-3xl'>
            <ExclamationCircleOutlined/>
          </div>
        </div>
        { question?.answer.map((element, index) => 
        (<div key={index} className='rounded-[20px] bg-[#f0f0f0] p-8 m-4 hover:bg-gray-300'
          onClick={() => {console.log('alo')}}
        >
            {alphabetOrder[index]}. {element?.content}
          </div>))}
      </div>
    </div>
  )
}

export default QuestionCard