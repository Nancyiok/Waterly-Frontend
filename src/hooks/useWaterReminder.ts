import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getWaterReminder,
  updateWaterReminder,
} from "@/services/water/water.reminder.service";
import { timeToMs } from "@/utils/timeToMs";

export const WATER_REMINDER_QUERY_KEY = ["water-reminder"];

const NEXT_REMINDER_REFETCH_DELAY = timeToMs(5, "seconds");

export const useWaterReminder = () =>
  useQuery({
    queryKey: WATER_REMINDER_QUERY_KEY,
    queryFn: getWaterReminder,
    refetchInterval: (query) => {
      const nextReminderAt = query.state.data?.nextReminderAt;
      if (!nextReminderAt) return false;
      const msUntilReminder = new Date(nextReminderAt).getTime() - Date.now();
      return Math.max(msUntilReminder, 0) + NEXT_REMINDER_REFETCH_DELAY;
    },
  });

export const useUpdateWaterReminder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateWaterReminder,
    onSuccess: (data) =>
      queryClient.setQueryData(WATER_REMINDER_QUERY_KEY, data),
  });
};
