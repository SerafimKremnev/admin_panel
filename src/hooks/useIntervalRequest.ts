import React, { useEffect, useState } from 'react';
import { axiosClient } from '../api/axiosCustom';
import { API } from '../api/api';

const useIntervalRequest = <T>(): T | null => {
  const [data, setData] = useState<T | null>(null);

  const getData = async () => {
    try {
      const { data: timers } = await axiosClient.get<T>(API.getTimers);
      setData(timers);
    } finally {
      // После завершения промиса ждем 30 секунд перед следующим запросом
      setTimeout(getData, 30000);
    }
  };

  useEffect(() => {
    getData();
  }, []); // Первый запрос при монтировании компонента

  return data;
};

export default useIntervalRequest;