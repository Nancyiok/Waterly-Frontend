import { useQuery } from "@tanstack/react-query";
import { getStatistics } from "@/services/statistics/statistics.service";
import type { StatisticsPeriod } from "@/types/statistics";
import { QUERY_STALE_TIMES } from "@/constants/queryStaleTimes";

export const STATISTICS_QUERY_KEY = ["statistics"];

export const useStatistics = (period: StatisticsPeriod) =>
  useQuery({
    queryKey: [...STATISTICS_QUERY_KEY, period],
    queryFn: () => getStatistics(period),
    staleTime: QUERY_STALE_TIMES.statistics,
  });
