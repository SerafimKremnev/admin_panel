import React from 'react';
import {TimersToday} from "../../../types/timers.interface";
import Modal from "../Modal/Modal";
import styles from './TrackModal.module.css'
import {convertToTime} from "../../../utils/converIsoToTime";
import {Typography} from "@mui/material";
import TaskName from "../../elements/TaskName/TaskName";


interface TrackModalProps {
  timersToday: TimersToday[]
  open: boolean
  name: string
  onClose: () => void
}
const TrackModal = ({timersToday, name, open, onClose}: TrackModalProps) => {
  return (
    <Modal isOpen={open} onRequestClose={onClose}>
      <Typography fontSize={'2rem'} fontWeight={600}>{name}</Typography>
      <div className={styles.timers}>
        {
          timersToday.slice(0, timersToday.length-1).map(timer =>
            timer.task &&
            <div
              key={timer.task.id}
              className={styles.timer}
            >
              <TaskName
                href={timer.task.url}
                name={timer.task.name}
                status={timer.task.status}
                currentTimeTrack={timer.duration}
              />
            </div>
          )
        }
      </div>
    </Modal>
  );
};

export default TrackModal;