/**
 * Opening hours configuration (Dubai local time, UTC+4).
 * Verified detail: the kitchen serves until approximately 11:30 PM.
 * Adjust opening times here — nothing else in the UI needs to change.
 */

export interface DayHours {
  day: string;
  /** 24h "HH:MM" in Dubai local time, or null when closed. */
  opens: string | null;
  closes: string | null;
}

export const openingHours: DayHours[] = [
  { day: "Monday", opens: "08:00", closes: "23:30" },
  { day: "Tuesday", opens: "08:00", closes: "23:30" },
  { day: "Wednesday", opens: "08:00", closes: "23:30" },
  { day: "Thursday", opens: "08:00", closes: "23:30" },
  { day: "Friday", opens: "08:00", closes: "23:30" },
  { day: "Saturday", opens: "08:00", closes: "23:30" },
  { day: "Sunday", opens: "08:00", closes: "23:30" },
];

export const hoursNote =
  "Timings are indicative and configurable. Please call ahead for holidays and Ramadan timings.";

const DUBAI_OFFSET_MINUTES = 4 * 60;

/** Current Dubai time as { dayIndex (0 = Monday), minutes since midnight }. */
export function getDubaiNow(now: Date = new Date()) {
  const dubai = new Date(now.getTime() + (DUBAI_OFFSET_MINUTES + now.getTimezoneOffset()) * 60000);
  const jsDay = dubai.getDay(); // 0 = Sunday
  return {
    dayIndex: (jsDay + 6) % 7,
    minutes: dubai.getHours() * 60 + dubai.getMinutes(),
    label: dubai.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
  };
}

function toMinutes(value: string) {
  const [h, m] = value.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

export function formatTime(value: string) {
  const minutes = toMinutes(value);
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export function isOpenNow(now: Date = new Date()) {
  const { dayIndex, minutes } = getDubaiNow(now);
  const today = openingHours[dayIndex];
  if (!today?.opens || !today.closes) return false;
  const open = toMinutes(today.opens);
  const close = toMinutes(today.closes);
  return close > open ? minutes >= open && minutes < close : minutes >= open || minutes < close;
}
