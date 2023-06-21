import React, {useEffect, useState} from 'react';
import {ITimers} from "../../../types/timers.interface";
import styles from './UserTimerList.module.css'
import CardUserPreview from "../CardUserPreview/CardUserPreview";
import {Skeleton} from "@mui/material";

interface UserTimerListProps {
  timers: ITimers[]
}

const UserTimerList = ({timers}: UserTimerListProps) => {

  const [timersNow, setTimerNow] = useState(timers)
  const [timersSleep, setTimerSleep] = useState(timers)

  useEffect(() => {
    const timeNow = []
    const timeSleep = []
    timers.forEach(timer => {
      if(timer.timer.end) {
        timeSleep.push(timer)
      } else {
        timeNow.push(timer)
      }
    })
    setTimerNow(timeNow)
    setTimerSleep(timeSleep)
  }, [timers])

  return (
    <div  className={styles.content}>
      <h3 className={styles.subtitle}>Трекают сейчас:</h3>
      <div className={styles.root}>
        {timersNow.length ? timersNow.map((timer) => <CardUserPreview key={timer.timer.id} timer={timer}/>) : <span className={styles.null}>Никого нет</span>}
      </div>
      <h3 className={styles.subtitle}>Последние треки:</h3>
      <div className={styles.root}>
        {timersSleep.length ? timersSleep.map((timer) => <CardUserPreview key={timer.timer.id} timer={timer}/>) : <span className={styles.null}>Никого нет</span>}
      </div>
    </div>
  );
};

export default UserTimerList;