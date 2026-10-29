import { useQuery } from "@tanstack/react-query";

import { getWaterStates } from "@/services/water/water.stats.service";

export const WATER_STATS_QUERY_KEY = ["water-stats"];

export const useTodayWaterStates = () =>
  useQuery({
    queryKey: WATER_STATS_QUERY_KEY,
    queryFn: () => getWaterStates(),
    select: (data) => data?.data ?? null,
  });
