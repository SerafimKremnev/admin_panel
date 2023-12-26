import React, {useState} from 'react';
import {IUser, Task, TimersToday} from "../../../types/timers.interface";
import {format, parseISO} from 'date-fns'
import Link from "next/link";
import styles from './CardUserPreview.module.css'
import {Breadcrumbs, Card, Modal, Typography} from "@mui/material";
import {convertToTime} from "../../../utils/converIsoToTime";
import Location from "../../elements/Location/Location";
import TaskName from "../../elements/TaskName/TaskName";
import {ru} from "date-fns/locale";
import TrackModal from "../../modal/TrackModal/TrackModal";

interface CardUserPreviewProps {
  user: IUser
  currentTimer: TimersToday
}
const CardUserPreview = ({user, currentTimer}: CardUserPreviewProps) => {
  const start = new Date(currentTimer.start)
  const task = currentTimer.task
  const [openModal, setOpenModal] = useState(false)

  function getTimeElapsed(end) {
    if(end) {

      const currentDate = new Date();
      const timeDiff = currentDate - new Date(end);

      // Преобразование разницы в миллисекундах в часы и минуты
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);

      return hours + "ч " + minutes + "мин назад";
    }
  }

  function timeToSeconds(time) {
    const parts = time.split(':');
    return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
  }
  
  // Функция для преобразования секунд в формат "hh:mm:ss"
  function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    return (
      pad(hours) + ':' + pad(minutes) + ':' + pad(remainingSeconds)
    );
  }
  
  // Функция для добавления ведущего нуля к числам < 10
  function pad(number) {
    return (number < 10 ? '0' : '') + number;
  }

  
  return (
    task ? <>
      <Card variant={'outlined'} className={styles.card}>
        <div onClick={() => setOpenModal(true)} className={styles.user}>
          <Typography fontSize={16}>{user.clickupUser.username}</Typography>
          <Typography fontSize={16}>{secondsToTime(user.timersToday.map(t => timeToSeconds(convertToTime(t.duration))).reduce((acc, v) => acc + v))}</Typography>
        </div>
        <div className={styles.content}>
          <Location location={task.location}/>
          <TaskName currentTimeTrack={currentTimer.duration} status={task.status} name={task.name} href={task.url}/>
          <div className={styles.date}>
            <span>Начало - {format(start, 'dd MMMM HH:mm:ss', {locale: ru})}</span>
            {currentTimer.end &&
              <span>Конец - {format(new Date(currentTimer.end), 'dd MMMM HH:mm:ss', {locale: ru})} <small>({getTimeElapsed(currentTimer.end)})</small></span>}
            {task.timeEstimate && <span>Оценка - {convertToTime(task.timeEstimate)}</span>}
            <span>Ушло времени на задачу - {convertToTime(user.timeSpentOnTask)}</span>
          </div>
        </div>
      </Card>
      <TrackModal
        name={user.clickupUser.username}
        timersToday={user.timersToday}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </> : <></>
  );
};

export default CardUserPreview;