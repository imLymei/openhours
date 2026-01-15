"use client";

import Show from "@/components/Show";
import Button from "@/components/ui/Button";
import useDate from "@/hooks/useDate";
import useTime from "@/hooks/useTime";
import { ICONS } from "@/lib/config";
import TimeData from "@/lib/TimeData";
import { useMemo, useState } from "react";

type WorkTime = {
  id: number;
  startTime: string;
  finalTime?: string;
  userId: number;
  workId: number;
};

export default function Home() {
  const { date, setDate, goToNextDay, goToPreviousDay } = useDate();
  const time = useTime();

  const [workTimes, setWorkTimes] = useState<WorkTime[]>([]);
  const lastWorkTime = useMemo<WorkTime | undefined>(
    () => workTimes[workTimes.length - 1],
    [workTimes],
  );
  const isWorking = useMemo(
    () => lastWorkTime && lastWorkTime.finalTime === undefined,
    [lastWorkTime],
  );
  const currentWorkingHours: TimeData = useMemo(() => {
    if (!isWorking || !lastWorkTime) return new TimeData();

    const timeData = new TimeData(lastWorkTime.startTime);

    return timeData.timeSince(time);
  }, [isWorking, lastWorkTime, time]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between font-bold">
        <Button onClick={goToPreviousDay} className="p-4">
          <ICONS.ARROW_LEFT />
        </Button>
        <Button
          onClick={() => setDate(new Date())}
          variant="ghost"
          className="text-center"
        >
          <p className="text-center">{date.toLocaleDateString()}</p>
          <p className="text-xs text-neutral-500">{time.toString()}</p>
        </Button>
        <Button onClick={goToNextDay} className="p-4">
          <ICONS.ARROW_RIGHT />
        </Button>
      </div>
      <div className="flex-1 overflow-auto">
        {JSON.stringify(workTimes, null, 2)}
      </div>
      <div className="text-center font-bold text-neutral-500">
        {currentWorkingHours.toString()}
      </div>
      <div className="flex gap-2">
        <Show when={!isWorking}>
          <Button variant="destructive" className="flex-1">
            Encerrar
          </Button>
        </Show>
        <Button
          className="flex-1"
          onClick={() =>
            setWorkTimes((workTimes) => {
              if (!isWorking) {
                return [
                  ...workTimes,
                  {
                    id: workTimes.length + 1,
                    startTime: time.toString(),
                    userId: 0,
                    workId: 0,
                  },
                ];
              } else {
                const lastWorkTime = workTimes[workTimes.length - 1];
                lastWorkTime.finalTime = time.toString();

                return [
                  ...workTimes.slice(0, workTimes.length - 1),
                  lastWorkTime,
                ];
              }
            })
          }
        >
          Marcar {isWorking ? "Saída" : "Entrada"}
        </Button>
      </div>
    </div>
  );
}
