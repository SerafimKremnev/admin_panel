import React, {useEffect, useState} from 'react';
import {TimersToday} from "../../../types/timers.interface";
import Modal from "../Modal/Modal";
import styles from './TrackModal.module.css'
import {convertToTime} from "../../../utils/converIsoToTime";
import {Typography} from "@mui/material";
import TaskName from "../../elements/TaskName/TaskName";
import Location from "../../elements/Location/Location";
import cn from "classnames";


interface TrackModalProps {
  timersToday: TimersToday[]
  open: boolean
  name: string
  onClose: () => void
}
const TrackModal = ({timersToday, name, open, onClose}: TrackModalProps) => {
  const [timers, setTimers] = useState<TimersToday[]>([])
  useEffect(() => {
    setTimers(timersToday.slice(1, timersToday.length))
  }, [timersToday])
  return (
    <Modal isOpen={open} onRequestClose={onClose}>
      <Typography fontSize={'2rem'} fontWeight={600}>{name}</Typography>
      <div className={styles.timers}>
        {
          timers.map((timer, i) => {
              const isGroup = timer.task && i > 0 && timer.task.location.list.id !== timers[i-1].task?.location.list.id
              return (timer.task &&
              <div
                key={i}
                className={cn(styles.timer, !isGroup && styles.noMargin)}
              >
                {isGroup &&
                  <Location location={timer.task.location}/>}
                {i == 0 && <Location location={timer.task.location}/>}
                <TaskName
                  href={timer.task.url}
                  name={timer.task.name}
                  status={timer.task.status}
                  currentTimeTrack={timer.duration}
                />
              </div>)
            }
          )
        }
      </div>
    </Modal>
  );
};

export default TrackModal;