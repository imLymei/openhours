export default class TimeData {
  hours: number;
  minutes: number;
  seconds: number;

  private formated?: string;

  constructor(hours?: number, minutes?: number, seconds?: number);
  constructor(string?: string);
  constructor(
    hoursOrString?: number | string,
    minutes?: number,
    seconds?: number,
  ) {
    if (typeof hoursOrString === "string") {
      if (!/[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/.test(hoursOrString)) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
      const timeData = hoursOrString.split(":");

      this.hours = +timeData[0];
      this.minutes = +timeData[1];
      this.seconds = +timeData[2];
    } else {
      this.hours = hoursOrString ?? 0;
      this.minutes = minutes ?? 0;
      this.seconds = seconds ?? 0;
    }
  }

  timeSince(otherTimeData: TimeData): TimeData {
    return new TimeData(
      Math.abs(otherTimeData.hours - this.hours),
      Math.abs(otherTimeData.minutes - this.minutes),
      Math.abs(otherTimeData.seconds - this.seconds),
    );
  }

  toString() {
    if (this.formated === undefined)
      this.formated = `${this.hours.toString().padStart(2, "0")}:${this.minutes.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;

    return this.formated;
  }
}
