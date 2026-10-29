import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import dayjs from "dayjs";
import {
  createWaterIntake,
  deleteWaterIntake,
  getTodaysWaterIntakes,
  getWaterIntakesByRange,
  updateWaterIntake,
} from "@/services/water/water.intake.service";
import type { UpdateWaterIntakeRequest } from "@/types/water";
import { WATER_STATS_QUERY_KEY } from "./useWaterStats";
import { STATISTICS_QUERY_KEY } from "./useStatistics";
import { formatDate } from "@/utils/formatDate";
import { DATE_FORMATS } from "@/constants/dateFormats";
import { QUERY_STALE_TIMES } from "@/constants/queryStaleTimes";

const WATER_INTAKE_QUERY_KEY = ["water-intake"];

const INTAKES_PAGE_LIMIT = 12;

export const useTodayWaterIntakes = (page = 0) =>
  useQuery({
    queryKey: [...WATER_INTAKE_QUERY_KEY, "today", page],
    queryFn: () =>
      getTodaysWaterIntakes({
        limit: INTAKES_PAGE_LIMIT,
        offset: page * INTAKES_PAGE_LIMIT,
        orderBy: "desc",
      }),
    select: (data) => (data ?? null),
  });

export const useDayWaterIntakes = (day: Date, page = 0) => {
  const start = dayjs(day).startOf("day");
  const end = start.add(1, "day");

  return useQuery({
    queryKey: [...WATER_INTAKE_QUERY_KEY, "day", formatDate(start, DATE_FORMATS.isoDate), page],
    queryFn: ({ signal }) =>
      getWaterIntakesByRange(
        {
          limit: INTAKES_PAGE_LIMIT,
          offset: page * INTAKES_PAGE_LIMIT,
          orderBy: "asc",
          from: start.toISOString(),
          to: end.toISOString(),
        },
        signal,
      ),
    staleTime: QUERY_STALE_TIMES.waterIntakeHistory,
  });
};

const useInvalidateWaterIntakes = () => {
  const queryClient = useQueryClient();
  return () =>
    Promise.all([
      queryClient.invalidateQueries({ queryKey: WATER_INTAKE_QUERY_KEY }),
      queryClient.invalidateQueries({ queryKey: WATER_STATS_QUERY_KEY }),
      queryClient.invalidateQueries({ queryKey: STATISTICS_QUERY_KEY }),
    ]);
};

export const useCreateWaterIntake = () => {
  const invalidate = useInvalidateWaterIntakes();
  return useMutation({
    mutationFn: createWaterIntake,
    onSuccess: invalidate,
  });
};

export const useUpdateWaterIntake = () => {
  const invalidate = useInvalidateWaterIntakes();
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateWaterIntakeRequest }) =>
      updateWaterIntake(id, data),
    onSuccess: invalidate,
  });
};

export const useDeleteWaterIntake = () => {
  const invalidate = useInvalidateWaterIntakes();
  return useMutation({
    mutationFn: deleteWaterIntake,
    onSuccess: invalidate,
  });
};
