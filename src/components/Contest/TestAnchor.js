import React from 'react'

function TestAnchor({questions}) {
  if (questions){
    return (
      <div className='w-[200px] bg-white rounded-3xl p-5 shadow-sm shadow-gray-400 m-3'>
        <div className='grid grid-cols-4 gap-1'>
          {
            questions.map((question,index) => !JSON.parse(question.answer).some(answer => answer.isChosen) ? (
              <div
                key={question?.questionId}
                className='bg-gray-200 w-[32px] h-[37px] p-2 rounded-lg hover:bg-slate-300 text-center'
              >
                {index+1}
              </div>
            ) : (
              <div
                key={question?.questionId}
                className='bg-yellow-400 p-2 rounded-lg hover:bg-yellow-500 w-[32px] h-[37px] text-center'
              >
                {index+1}
              </div>
            ))
          }
        </div>
      </div>
    ) 
  }
}

export default TestAnchor