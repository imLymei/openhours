import { useEffect, useRef, useState } from "react";

type TimeData = {
  hour: number;
  minute: number;
  seconds: number;
  formated: string;
};

export default function useTime(): TimeData {
  const [time, setTime] = useState(() => {
    const date = new Date();

    const data: TimeData = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      seconds: date.getSeconds(),
      formated: "",
    };
    data.formated = `${data.hour.toString().padStart(2, "0")}:${data.minute.toString().padStart(2, "0")}:${data.seconds.toString().padStart(2, "0")}`;

    return data;
  });
  const intervalId = useRef<NodeJS.Timeout>(null);

  function forceUpdate() {
    setTime(() => {
      const date = new Date();

      const data: TimeData = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds(),
        formated: "",
      };
      data.formated = `${data.hour.toString().padStart(2, "0")}:${data.minute.toString().padStart(2, "0")}:${data.seconds.toString().padStart(2, "0")}`;

      return data;
    });
  }

  useEffect(() => {
    intervalId.current = setInterval(forceUpdate, 1000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, []);

  return time;
}
