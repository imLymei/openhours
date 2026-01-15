"use client";

import Button from "@/components/ui/Button";
import useDate from "@/hooks/useDate";
import useTime from "@/hooks/useTime";
import { ICONS } from "@/lib/config";

export default function Home() {
  const { date, setDate, goToNextDay, goToPreviousDay } = useDate();
  const time = useTime();

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
          <p className="text-xs text-neutral-500">{time.formated}</p>
        </Button>
        <Button onClick={goToNextDay} className="p-4">
          <ICONS.ARROW_RIGHT />
        </Button>
      </div>
      <div className="flex-1 overflow-auto"></div>
      <div className="flex gap-2">
        <Button variant="destructive" className="flex-1">
          Encerrar
        </Button>
        <Button className="flex-1">Marcar Entrada</Button>
      </div>
    </div>
  );
}
