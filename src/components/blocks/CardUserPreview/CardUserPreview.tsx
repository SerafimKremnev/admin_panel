import React from 'react';
import {Breadcrumb, Card, Typography} from "antd";
import {ITimers} from "../../../types/timers.interface";
import { parseISO } from 'date-fns'
import Link from "next/link";
import styles from './CardUserPreview.module.css'
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";

interface CardUserPreviewProps {
  timer: ITimers
}
const CardUserPreview = ({timer}: CardUserPreviewProps) => {
  const start = parseISO(timer.timer.start)
  const end = parseISO(timer.timer.end)
  const durationInMilliseconds = end.getTime() - start.getTime()
  const durationInSeconds = durationInMilliseconds / 1000
  const hours = Math.floor(durationInSeconds / 3600)
  const minutes = Math.floor((durationInSeconds % 3600) / 60)
  const seconds = Math.floor(durationInSeconds % 60)

  const formattedDuration = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return (
    <Card key={timer.timer.id} title={timer.clickupUser.username}>
      <Breadcrumb>
        <BreadcrumbItem>{timer.timer.task.location.space.name}</BreadcrumbItem>
        <BreadcrumbItem>{timer.timer.task.location.list.name}</BreadcrumbItem>
        <BreadcrumbItem>{timer.timer.task.location.folder.name}</BreadcrumbItem>
      </Breadcrumb>
      <Link
        className={styles.link}
        target={'_blank'}
        href={timer.timer.task.url}
      >
        {timer.timer.task.name}
      </Link>
      {formattedDuration}
    </Card>
  );
};

export default CardUserPreview;