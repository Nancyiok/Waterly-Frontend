export type WaterReminder = {
  enabled: boolean;
  timezone: string;
  startTime: string;
  endTime: string;
  intervalMinutes: number;
  days: number[];
  nextReminderAt: string | null;
};

export type UpdateWaterReminder = Partial<
  Omit<WaterReminder, "nextReminderAt">
>;
