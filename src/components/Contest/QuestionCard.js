import React from 'react'
import { Typography } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';


const alphabetOrder = ['A', 'B', 'C', 'D', 'E'];

function QuestionCard({question, index}) {

  const dispatch = useDispatch();

  return (
    <div className='w-[910px] rounded-[20px] bg-white shadow-sm shadow-black mt-10'>
      <div className='flex flex-col justify-center p-6'>
        <div className='flex flex-row justify-between'>
          <Typography>Question {index}: { question?.questionContent }</Typography>
          <div className='text-3xl'>
            <ExclamationCircleOutlined/>
          </div>
        </div>
          { JSON.parse(question?.answer).map((answer, idx) => !answer?.isChosen ? (
            <div key={idx} className='rounded-[20px] bg-[#f0f0f0] p-8 m-4 hover:bg-gray-300'
              onClick={() => {
                dispatch(actions.chooseAnswer({questionId: question?.questionId, index: idx}));
              }}
            >
              {alphabetOrder[idx]}. {answer?.content}
            </div>
          ) : (
            <div key={idx} className='rounded-[20px] bg-slate-400 p-8 m-4 hover:bg-slate-500'
              onClick={() => {
                dispatch(actions.unchooseAnswer({questionId: question?.questionId}))
              }}
            >
              {alphabetOrder[idx]}. {answer?.content}
            </div>
          ))}

      </div>
    </div>
  )
}

export default QuestionCard