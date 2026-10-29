import type { Statistics, StatisticsPeriod } from "@/types/statistics";
import { httpService } from "@/services/http/http.service.ts";

const STATISTICS_API_URL = "/statistics";

export const getStatistics = async (period: StatisticsPeriod) => {
  const result = await httpService.get<Statistics>(STATISTICS_API_URL, {
    params: { period },
  });
  return result?.data ?? null;
};
