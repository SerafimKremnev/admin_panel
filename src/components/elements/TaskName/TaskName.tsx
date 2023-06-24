import React from 'react';
import Link from "next/link";
import styles from './TaskName.module.css'
import {Status} from "../../../types/timers.interface";
import {convertToTime} from "../../../utils/converIsoToTime";

interface TaskNamProps {
  href: string
  name: string
  status: Status
  currentTimeTrack: string
}

const TaskName = ({href, name, status, currentTimeTrack}: TaskNamProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.taskName}>
        <div className={styles.status} style={{backgroundColor: status.color}}/>
        <Link
          className={styles.link}
          target={'_blank'}
          href={href}
        >
          {name}
        </Link>
      </div>
      <div>{convertToTime(currentTimeTrack)}</div>
      <div className={styles.statusName}>{status.status}</div>
    </div>
  );
};

export default TaskName;