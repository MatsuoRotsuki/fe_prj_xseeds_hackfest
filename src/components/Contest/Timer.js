import moment from 'moment';
import React, { useState, useEffect } from 'react';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
}

function Timer({countdown}) {

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const updateRemainingTime = (countdown) => {
      const now = moment();
      const diffHours = Math.abs(now.diff(countdown, 'hours') % 24);
      const diffMinutes = Math.abs(now.diff(countdown, 'minute') % 60);
      const diffSeconds = Math.abs(now.diff(countdown, 'seconds') % 60);
      setRemainingTime({
        seconds: diffSeconds,
        minutes: diffMinutes,
        hours: diffHours
      });
    }
    const intervalId = setInterval(() => {
      updateRemainingTime(countdown);
    }, 1000);
    return () => clearInterval(intervalId);
  })

  return (
    <div className='rounded-[20px] bg-white shadow-sm shadow-black text-4xl w-fit p-5 m-3'>{remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}</div>
  )
}

export default Timer