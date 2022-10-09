import React from 'react'
import { Button, Card, Space } from 'antd'
import { Link } from 'react-router-dom'

function TestListCard({test}) {
  return (
    <Card 
      title={`${test?.testName} ( ${test?.type})`}
      style={{width: 300}}
    >
      <div className='flex flex-col items-center mb-5'>
        <div>Kết quả lần cuối</div>
        <div>合計: 150</div>
        <div>言語知識: 60</div>
        <div>読解: 50</div>
        <div>聴解: 50</div>
      </div>
      <div className='flex justify-center'>
        <Space>
          <Link to={`/takecontest/${test?.testId}`}>
            <Button>
              Vao thi
            </Button>
          </Link>
          <Button>
            Xem lai
          </Button>
        </Space>
      </div> 
    </Card>
  )
}

export default TestListCard