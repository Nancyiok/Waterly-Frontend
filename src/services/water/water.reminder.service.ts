import type { UpdateWaterReminder, WaterReminder } from "@/types/reminder";
import { httpService } from "@/services/http/http.service.ts";

const WATER_REMINDER_API_URL = "/water-reminder";

export const getWaterReminder = async () => {
  const result = await httpService.get<WaterReminder>(WATER_REMINDER_API_URL);
  return result?.data ?? null;
};

export const updateWaterReminder = async (data: UpdateWaterReminder) => {
  const result = await httpService.patch<WaterReminder>(
    WATER_REMINDER_API_URL,
    data,
  );
  return result?.data ?? null;
};
