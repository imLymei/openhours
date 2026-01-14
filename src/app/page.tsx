"use client";

import Button from "@/components/ui/Button";
import useTime from "@/hooks/useTime";
import { APP } from "@/lib/config";
import { useState } from "react";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const time = useTime();

  return (
    <div className="grid h-full grid-rows-3 p-6">
      <div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl font-bold">{APP.name}</p>
          <p className="text-xs text-neutral-500">v{APP.version}</p>
        </div>
        <p className="text-center text-4xl font-bold">
          {selectedDate.toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <Button
          className="aspect-square text-4xl font-bold"
          suppressHydrationWarning
        >
          {time.hour.toString().padStart(2, "0")}:
          {time.minute.toString().padStart(2, "0")}:
          {time.seconds.toString().padStart(2, "0")}
        </Button>
        <Button variant="destructive">Skip</Button>
      </div>
      <p>a</p>
    </div>
  );
}
