import React from 'react';
import {ITimers} from "../../../types/timers.interface";
import styles from './UserTimerList.module.css'
import CardUserPreview from "../CardUserPreview/CardUserPreview";

interface UserTimerListProps {
  timers: ITimers[]
}

const UserTimerList = ({timers}: UserTimerListProps) => {

  return (
    <div className={styles.root}>
      {timers.map((timer) =>
        <CardUserPreview key={timer.timer.id} timer={timer}/>
      )}
    </div>
  );
};

export default UserTimerList;