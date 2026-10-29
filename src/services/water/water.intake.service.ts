import type {
  WaterIntake,
  CreateWaterIntakeRequest,
  UpdateWaterIntakeRequest,
  GetWaterIntakesParams,
  GetWaterTodayIntake,
  WaterIntakeTotal,
} from "@/types/water";
import { httpService } from "@/services/http/http.service.ts";

const WATER_INTAKE_API_URL = "/water-intake";

export const createWaterIntake = async (data: CreateWaterIntakeRequest) => {
  const result = await httpService.post<WaterIntake>(WATER_INTAKE_API_URL, {
    ...data,
  });
  return result?.data ?? null;
};

export const getTodaysWaterIntakes = async (params: GetWaterTodayIntake) => {
  const result = await httpService.getPaginated<WaterIntake, WaterIntakeTotal>(
    `${WATER_INTAKE_API_URL}/today`,
    { params },
  );
  return result;
};

export const getWaterIntakesByRange = async (
  params: GetWaterIntakesParams,
  signal?: AbortSignal,
) => {
  const result = await httpService.getPaginated<WaterIntake, WaterIntakeTotal>(
    WATER_INTAKE_API_URL,
    { params, signal },
  );
  return result;
};

export const getWaterIntake = async (id: number) => {
  const result = await httpService.get<WaterIntake>(
    `${WATER_INTAKE_API_URL}/${id}`,
  );
  return result?.data ?? null;
};

export const updateWaterIntake = async (
  id: number,
  data: UpdateWaterIntakeRequest,
) => {
  const result = await httpService.patch<WaterIntake>(
    `${WATER_INTAKE_API_URL}/${id}`,
    { ...data },
  );
  return result?.data ?? null;
};

export const deleteWaterIntake = async (id: number) => {
  const result = await httpService.delete<WaterIntake>(
    `${WATER_INTAKE_API_URL}/${id}`,
  );
  return result?.data ?? null;
};


