import moment from 'moment';
import React, { useState, useEffect } from 'react';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
}

const parseNumber = (number) => {
  if (number < 10) {
    return `0${number}`;
  } else return `${number}`;
}

function Timer({countdown, triggerOnTimeUp}) {

  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const updateRemainingTime = (countdown) => {
      const now = moment();
      const diffHours = Math.abs(now.diff(countdown, 'hours') % 24);
      const diffMinutes = Math.abs(now.diff(countdown, 'minute') % 60);
      const diffSeconds = Math.abs(now.diff(countdown, 'seconds') % 60);
      setRemainingTime({
        seconds: parseNumber(diffSeconds),
        minutes: parseNumber(diffMinutes),
        hours: parseNumber(diffHours)
      });
      if (diffSeconds === 0 && diffMinutes === 0 && diffHours === 0){
        triggerOnTimeUp();
      }
    }
    const intervalId = setInterval(() => {
      updateRemainingTime(countdown);
    }, 1000);
    return () => clearInterval(intervalId);
  })

  return (
    <div className='rounded-[20px] bg-white shadow-sm shadow-black text-4xl w-fit p-5 m-3'>
      {remainingTime.hours}:{remainingTime.minutes}:{remainingTime.seconds}
    </div>
  )
}

export default Timer