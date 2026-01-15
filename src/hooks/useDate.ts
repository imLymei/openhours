import { useState } from "react";

export default function useDate() {
  const [date, setDate] = useState(new Date());

  function changeDayBy(offset: number) {
    setDate((date) => {
      const newDate = structuredClone(date);
      newDate.setDate(date.getDate() + offset);

      return newDate;
    });
  }

  return {
    date,
    setDate,
    changeDayBy,
    goToNextDay: () => changeDayBy(1),
    goToPreviousDay: () => changeDayBy(-1),
  };
}
