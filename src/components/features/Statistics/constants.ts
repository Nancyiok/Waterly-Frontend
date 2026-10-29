import type { StatisticsPeriod } from "@/types/statistics";
import { DATE_FORMATS } from "@/constants/dateFormats";
import { STATISTICS_TEXTS } from "@/constants/texts/statistics";

export type StatsPeriod = StatisticsPeriod;

export const STATS_PERIODS: { value: StatsPeriod; label: string }[] = [
  { value: "week", label: STATISTICS_TEXTS.periods.week },
  { value: "month", label: STATISTICS_TEXTS.periods.month },
  { value: "year", label: STATISTICS_TEXTS.periods.year },
];

export const CHART_COLORS = {
  from: "#4A9BD1",
  to: "#00AEC0",
  grid: "#C4CDD5",
  track: "#E8EDF1",
  cursor: "rgba(0,0,0,0.04)",
};


export const LINE_DATE_FORMATS: Record<StatsPeriod, string> = {
  week: DATE_FORMATS.weekDay,
  month: DATE_FORMATS.dayMonth,
  year: DATE_FORMATS.month,
};
