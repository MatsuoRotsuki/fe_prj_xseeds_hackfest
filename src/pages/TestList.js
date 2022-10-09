import { Pagination } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeLayout from '../components/layouts/HomeLayout'
import TestListCard from '../components/TestListComponents/TestListCard'
import { testsState$ } from '../redux/selectors'
import * as actions from '../redux/actions';

function TestList(props) {

  const dispatch = useDispatch();
  const tests = useSelector(testsState$);

  useEffect(() => {
    dispatch(actions.getTests.getTestsRequest());
  }, [dispatch]);

  return (
    <HomeLayout>
      <div className='mt-12 grid grid-cols-4 gap-8 m-8'>
      { tests?.data.map((test, index) => (
          <TestListCard key={test?.testId} test={test}/>
        ))
      }  
      </div>
      <Pagination
        defaultCurrent={1}
        total={10}
      />
    </HomeLayout>
  )
}

export default TestList