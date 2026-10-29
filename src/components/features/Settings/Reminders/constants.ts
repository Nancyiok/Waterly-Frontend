import type { RemindersFormValues } from "@/validations/schemas/remindersValidation";

export const DEFAULT_REMINDER_SETTINGS: RemindersFormValues = {
  enabled: true,
  intervalMinutes: "60",
  startTime: "08:00",
  endTime: "22:00",
  days: [1, 2, 3, 4, 5, 6, 0],
};

const INTERVAL_OPTIONS = [
  { value: "30", label: "30 min" },
  { value: "60", label: "1 hour" },
  { value: "90", label: "1.5 hours" },
  { value: "120", label: "2 hours" },
] as const;

const DEV_INTERVAL_OPTION = { value: "1", label: "1 min for test" } as const;

export const REMINDER_INTERVAL_OPTIONS = import.meta.env.DEV
  ? [DEV_INTERVAL_OPTION, ...INTERVAL_OPTIONS]
  : INTERVAL_OPTIONS;

export type IntervalValue = (typeof REMINDER_INTERVAL_OPTIONS)[number]["value"];

export const WEEKDAYS = [
  { value: 1, label: "Mon" },
  { value: 2, label: "Tue" },
  { value: 3, label: "Wed" },
  { value: 4, label: "Thu" },
  { value: 5, label: "Fri" },
  { value: 6, label: "Sat" },
  { value: 0, label: "Sun" },
];
