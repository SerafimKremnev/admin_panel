import React, { useEffect, useState } from "react";
import styles from "./UserTimerList.module.css";
import CardUserPreview from "../CardUserPreview/CardUserPreview";
import { IUser } from "../../../types/timers.interface";

interface UserTimerListProps {
  users: IUser[];
}

const UserTimerList = ({ users }: UserTimerListProps) => {
  const [userTrackNow, setUserTrackNow] = useState(users);
  const [userSleep, setUserSleep] = useState(users);

  useEffect(() => {
    const trackNow = [];
    const trackSleep = [];

    users.forEach((timer) => {
      if (timer.timersToday.at(-1).end) {
        trackSleep.push(timer);
      } else {
        trackNow.push(timer);
      }
    });

    setUserTrackNow(trackNow);
    setUserSleep(trackSleep);
  }, [users]);

  return (
    <div>
      <h3 className={styles.subtitle}>Трекают сейчас:</h3>
      <div className={styles.root}>
        {userTrackNow.length ? (
          userTrackNow.map((user) => (
            <CardUserPreview
              user={user}
              key={user.clickupUser.id}
              currentTimer={user.timersToday.at(-1)}
            />
          ))
        ) : (
          <span className={styles.null}>Никого нет</span>
        )}
      </div>
      <h3 className={styles.subtitle}>Последние треки:</h3>
      <div className={styles.root}>
        {userSleep.length ? (
          userSleep.map((user) => (
            <CardUserPreview
              user={user}
              key={user.clickupUser.id}
              currentTimer={user.timersToday[0]}
            />
          ))
        ) : (
          <span className={styles.null}>Никого нет</span>
        )}
      </div>
    </div>
  );
};

export default UserTimerList;
