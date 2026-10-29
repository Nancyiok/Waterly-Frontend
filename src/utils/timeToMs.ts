type TimeUnit = "seconds" | "minutes" | "hours" | "days";

const MULTIPLIERS_MS: Record<TimeUnit, number> = {
  seconds: 1000,
  minutes: 60 * 1000,
  hours: 60 * 60 * 1000,
  days: 24 * 60 * 60 * 1000,
};

export const timeToMs = (value: number, unit: TimeUnit) => value * MULTIPLIERS_MS[unit];
