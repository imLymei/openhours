import TimeData from "@/lib/TimeData";
import { useEffect, useRef, useState } from "react";

export default function useTime(): TimeData {
  const [time, setTime] = useState(() => {
    const date = new Date();

    const data: TimeData = new TimeData(
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    );

    return data;
  });
  const intervalId = useRef<NodeJS.Timeout>(null);

  function forceUpdate() {
    setTime(() => {
      const date = new Date();

      const data: TimeData = new TimeData(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      );

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
