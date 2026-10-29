export const HISTORY_TEXTS = {
  title: "History",
  description: "Pick a day to see what you drank",
  emptyDayTitle: "No drinks on this day",
  emptyDescription: "Pick another date in the calendar",
  entriesSummary: (ml: number, count: number) =>
    `${ml} ml in ${count} ${count === 1 ? "entry" : "entries"}`,
} as const;
