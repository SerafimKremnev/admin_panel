import {useRemResize} from "../hooks/useRemResize";
import {useEffect} from "react";
import useIntervalRequest from "../hooks/useIntervalRequest";
import {GetStaticProps} from "next";
import {API} from "../api/api";
import {axiosServer} from "../api/axiosCustom";
import UserTimerList from "../components/blocks/UserTimerList/UserTimerList";
import {IUser} from "../types/timers.interface";


export default function Home() {
  const data = useIntervalRequest<IUser[]>()

  return (
    <>
      {data && <UserTimerList users={data}/>}
    </>
  )
}
