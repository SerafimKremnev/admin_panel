import {useRemResize} from "../hooks/useRemResize";
import {useEffect} from "react";
import useIntervalRequest from "../hooks/useIntervalRequest";
import {GetStaticProps} from "next";
import {API} from "../api/api";
import {axiosServer} from "../api/axiosCustom";
import {ITimers} from "../types/timers.interface";
import UserTimerList from "../components/blocks/UserTimerList/UserTimerList";


export default function Home() {
  const data = useIntervalRequest<ITimers[]>()

  return (
    <>
      {data && <UserTimerList timers={data}/>}
    </>
  )
}
