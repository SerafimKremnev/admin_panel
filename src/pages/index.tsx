import {useRemResize} from "../hooks/useRemResize";
import {useEffect, useState} from "react";
import useIntervalRequest from "../hooks/useIntervalRequest";
import {GetStaticProps} from "next";
import {API} from "../api/api";
import {axiosClient, axiosServer} from "../api/axiosCustom";
import UserTimerList from "../components/blocks/UserTimerList/UserTimerList";
import {IUser} from "../types/timers.interface";

const useInterval = (callback: () => void, delay: number) => {
  useEffect(() => {
    const intervalId = setInterval(callback, delay);
    return () => clearInterval(intervalId);
  }, [callback, delay]);
};


export default function Home() {
  const data = useIntervalRequest<IUser[]>()

  return (
    <>
      {data && <UserTimerList users={data}/>}
    </>
  )
}
