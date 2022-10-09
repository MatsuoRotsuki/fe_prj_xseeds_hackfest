import React, { useEffect, useState } from 'react'
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
import { useNavigate, useParams } from 'react-router-dom'

function ThirdContest() {
  const dispatch = useDispatch();
  const user = useSelector(userState$);
  const test = useSelector(testsState$);
  const [now, setNow] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(actions.getTest.getTestRequest(id));
  }, [dispatch])

  useEffect(() => {
    setNow(moment().add(20*60*1000+2000));
  }, []);

  const onSubmit = () => {
    const wrongAnswer = test?.takeTest?.questions.filter(question => question.type == 1 && !JSON.parse(question.answer).some(answer => answer.isChosen && answer.isCorrect));
    const testId = test?.takeTest?.testId;
    navigate(`/takecontest/${id}`);
  }
  
  return (
    <HomeLayout>
      <div className='flex flex-row justify-between'>
        <div className='w-full wrapper flex flex-col items-center'>
          {
            test?.takeTest?.questions.map((question, index) => question.type == 1 && (
              <div id={"Q" + question?.questionId} key={`Q${question?.questionId}`}>
                <QuestionCard key={question?.questionId} question={question} index={index+1} />
              </div>
            ))
          }
          <div className='bg-[#09d348] m-5 text-lg'>
            <Button type="primary"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </div>     
        </div>
        <div className=''>
          <Affix offsetTop={100}>
            <div className='flex flex-col items-center'>
              <DetailCard
                createdBy={test?.takeTest?.createdBy}
                createdDate={test?.takeTest?.createdDate}
              />
              <Timer countdown={now} triggerOnTimeUp={onSubmit}/>
              <TestAnchor questions={test?.takeTest?.questions} type={1}/>
            </div>
          </Affix>
        </div>
      </div>
    </HomeLayout>
  )
}

export default ThirdContest