import { useState, useEffect } from 'react';

export interface CurrentTimeState {
  currentDate: Date;
  currentTime: Date;
}

export function useCurrentTime(): CurrentTimeState {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return { currentDate, currentTime };
}
