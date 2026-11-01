import type { RemindersFormValues } from "@/validations/schemas/remindersValidation";
import { SETTINGS_TEXTS } from "@/constants/texts";

const { intervals, weekdays } = SETTINGS_TEXTS.reminders;

export const DEFAULT_REMINDER_SETTINGS: RemindersFormValues = {
  enabled: true,
  intervalMinutes: "60",
  startTime: "08:00",
  endTime: "22:00",
  days: [1, 2, 3, 4, 5, 6, 0],
};

const INTERVAL_OPTIONS = [
  { value: "30", label: intervals.halfHour },
  { value: "60", label: intervals.hour },
  { value: "90", label: intervals.hourAndHalf },
  { value: "120", label: intervals.twoHours },
] as const;

const DEV_INTERVAL_OPTION = { value: "1", label: intervals.testMinute } as const;

export const REMINDER_INTERVAL_OPTIONS = import.meta.env.DEV
  ? [DEV_INTERVAL_OPTION, ...INTERVAL_OPTIONS]
  : INTERVAL_OPTIONS;

export type IntervalValue = (typeof REMINDER_INTERVAL_OPTIONS)[number]["value"];

export const WEEKDAYS = [
  { value: 1, label: weekdays.mon },
  { value: 2, label: weekdays.tue },
  { value: 3, label: weekdays.wed },
  { value: 4, label: weekdays.thu },
  { value: 5, label: weekdays.fri },
  { value: 6, label: weekdays.sat },
  { value: 0, label: weekdays.sun },
];
