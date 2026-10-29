import { type UpdateWaterStats, type WaterStats } from "@/types/water";
import { httpService } from "../http/http.service";

const WATER_STATES_URL = "/water-stats";

export const getWaterStates = async () => {
  return httpService.get<WaterStats>(`${WATER_STATES_URL}`);
};

export const updateWaterStates = async (data: UpdateWaterStats) => {
  return httpService.patch<WaterStats>(`${WATER_STATES_URL}`, data);
};
