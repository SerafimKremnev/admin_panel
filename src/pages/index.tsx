import {useRemResize} from "../hooks/useRemResize";
import {useEffect} from "react";
import useIntervalRequest from "../hooks/useIntervalRequest";
import {GetStaticProps} from "next";
import {API} from "../api/api";
import {axiosServer} from "../api/axiosCustom";
import {ITimers} from "../types/timers.interface";
import UserTimerList from "../components/blocks/UserTimerList/UserTimerList";


export default function Home({timers}: PageProps) {
  const data = useIntervalRequest<ITimers[]>()

  return (
    <>
      <UserTimerList timers={data ? data : timers}/>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  try {
    const { data: timers } = await axiosServer.get<ITimers[]>(API.getTimers);

    return {
      props: {
        timers
      },
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
};


interface PageProps {
  timers: ITimers[]
}