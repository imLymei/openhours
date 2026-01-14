import { useEffect, useRef, useState } from "react";

export default function useTime(): {
  hour: number;
  minute: number;
  seconds: number;
} {
  const [time, setTime] = useState(() => {
    const date = new Date();

    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  });
  const intervalId = useRef<NodeJS.Timeout>(null);

  function forceUpdate() {
    setTime(() => {
      const date = new Date();

      return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds(),
      };
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
