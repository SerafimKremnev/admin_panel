import React from 'react';
import {ITimers} from "../../../types/timers.interface";
import { parseISO } from 'date-fns'
import Link from "next/link";
import styles from './CardUserPreview.module.css'
import {Breadcrumbs, Card, Typography} from "@mui/material";

interface CardUserPreviewProps {
  timer: ITimers
}
const CardUserPreview = ({timer}: CardUserPreviewProps) => {
  const start = new Date(timer.timer.start)
  const end = new Date(timer.timer.end ? timer.timer.end : Date.now())
  const durationInMilliseconds = end.getTime() - start.getTime()
  const durationInSeconds = durationInMilliseconds / 1000
  const hours = Math.floor(durationInSeconds / 3600)
  const minutes = Math.floor((durationInSeconds % 3600) / 60)
  const seconds = Math.floor(durationInSeconds % 60)

  const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return (
    <Card className={styles.card} key={timer.timer.id}>
      <Typography fontSize={16} className={styles.user}>{timer.clickupUser.username}</Typography>
      <div className={styles.content}>
        {'task' in  timer.timer ?
        <>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography
              underline="hover"
              color="inherit"
            >
              {timer.timer.task.location.folder.name}
            </Typography>
            <Typography color="text.primary">{timer.timer.task.location.list.name}</Typography>
          </Breadcrumbs>
          <div className={styles.link}>
            <div className={styles.status} style={{backgroundColor: timer.timer.task.status.color}}></div>
            <Link
              className={styles.link}
              target={'_blank'}
              href={timer.timer.task.url}
            >
              {timer.timer.task.name}
            </Link>
          </div>
        </> : null}
        <div className={styles.date}>{formattedDuration}</div>
      </div>
    </Card>
  );
};

export default CardUserPreview;