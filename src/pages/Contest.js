import React, { useEffect, useRef } from 'react'
import DetailCard from '../components/Contest/DetailCard'
import QuestionCard from '../components/Contest/QuestionCard'
import Timer from '../components/Contest/Timer'
import HomeLayout from '../components/layouts/HomeLayout'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { testsState$, userState$ } from '../redux/selectors'
import * as actions from '../redux/actions';
import { Affix, Button } from 'antd'
import TestAnchor from '../components/Contest/TestAnchor'

function Contest() {

  const dispatch = useDispatch();
  const user = useSelector(userState$);
  const test = useSelector(testsState$);
  const ref = useRef();
  ref.current = moment();

  useEffect(() => {
    dispatch(actions.getTest.getTestRequest(1));
  }, [dispatch])
  
  return (
    <HomeLayout>
      <div className='flex flex-row justify-between'>
        <div className='w-full wrapper flex flex-col items-center'>
          {
            test?.takeTest?.questions.map((question, index) => question?.type == 3 && (
              <>
                <QuestionCard key={question?.questionId} question={question} index={index+1} />
              </>
            ))
          }
          <Button type="primary">
            Click
          </Button>
        </div>
        <div className=''>
          <Affix offsetTop={100}>
            <div className='flex flex-col items-center'>
              <DetailCard
                createdBy={test?.takeTest?.createdBy}
                createdDate={test?.takeTest?.createdDate}
              />
              <Timer countdown={ref.current.add(20*60*1000)}/>
              <TestAnchor questions={test?.takeTest?.questions}/>
            </div>
          </Affix>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Contest