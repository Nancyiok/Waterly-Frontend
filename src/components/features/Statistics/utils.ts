import type { StatisticsBar } from "@/types/statistics";
import type { StatsPeriod } from "./constants";
import { formatDate } from "@/utils/formatDate";
import { DATE_FORMATS } from "@/constants/dateFormats";

export const formatBarLabel = (bar: StatisticsBar, period: StatsPeriod) =>
  period === "year"
    ? formatDate(bar.from, DATE_FORMATS.month)
    : `${formatDate(bar.from, DATE_FORMATS.dayMonth)} to ${formatDate(bar.to, DATE_FORMATS.dayMonth)}`;
