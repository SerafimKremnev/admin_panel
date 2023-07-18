import React, {useEffect, useState} from 'react';
import {axiosClient} from "../api/axiosCustom";
import {API} from "../api/api";



const useIntervalRequest = <T>(): T | null => {
  const [data, setData] = useState<T | null>(null)

  const getData = async () => {
    const {data: timers} = await axiosClient.get<T>(API.getTimers)
    setData(timers)
  }

  useEffect(() => {
    getData()
    const interval = setInterval(() => {
      getData()
    }, 1000 * 30)
    return () => clearInterval(interval)
  }, [])

  return data
};

export default useIntervalRequest;

