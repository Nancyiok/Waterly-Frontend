import { timeToMs } from "@/utils/timeToMs";

const QUERY_STALE_TIMES = {
  statistics: timeToMs(30, "minutes"),
  waterIntakeHistory: timeToMs(30, "minutes"),
} as const;

export { QUERY_STALE_TIMES };
