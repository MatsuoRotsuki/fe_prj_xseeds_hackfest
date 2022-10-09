import React from 'react'

function TestAnchor({questions, type}) {
  if (questions){
    return (
      <div className='w-[200px] bg-white rounded-3xl p-5 shadow-sm shadow-gray-400 m-3'>
        <div className='grid grid-cols-4 gap-1'>
          {
            questions.map((question,index) => question.type == type && ( !JSON.parse(question.answer).some(answer => answer.isChosen) ? (
              <div
                onClick={() => {
                  document.querySelector(`#Q${question?.questionId}`).scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                key={question?.questionId}
                className='bg-gray-200 w-[32px] h-[37px] p-2 rounded-lg hover:bg-slate-300 text-center cursor-pointer'
              >
                {index+1}
              </div>
            ) : (
              <div
                onClick={() => {
                  document.querySelector(`#Q${question?.questionId}`).scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                key={question?.questionId}
                className='bg-yellow-400 p-2 rounded-lg hover:bg-yellow-500 w-[32px] h-[37px] text-center cursor-pointer'
              >
                {index+1}
              </div>
            )))
          }
        </div>
      </div>
    ) 
  }
}

export default TestAnchor