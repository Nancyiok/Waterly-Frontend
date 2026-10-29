export type SortOrder = "asc" | "desc";

export type WaterIntake = {
  id: number;
  userId: number;
  date: string;
  ml: number;
};

export type CreateWaterIntakeRequest = {
  ml: number;
};

export type UpdateWaterIntakeRequest = Partial<CreateWaterIntakeRequest>;

export type GetWaterIntakesParams = {
  limit: number;
  offset: number;
  orderBy?: SortOrder;
  from?: string;
  to?: string;
};

export type WaterIntakeTotal = {
  totalMl: number;
};

export type Climate = "cool" | "moderate" | "warm" | "extreme";
export type ActivityLevel = "sedentary" | "moderate" | "heavy" | "athletic";

export type WaterStats = {
  waterGoal: number;
  streakGoal: number;
  todayIntakeMl: number;
  dailyRemainingWater: number;
  climate: Climate;
  activity: ActivityLevel;
  heavySweating: boolean;
  caffeine: boolean;
  recovery: boolean;
  dailyRemainingWaterPercent: number;
  weeklyAverageMl: number;
};

export type UpdateWaterStats = Partial<
  Pick<
    WaterStats,
    "climate" | "activity" | "heavySweating" | "caffeine" | "recovery"
  >
>;

export type GetWaterTodayIntake = Omit<GetWaterIntakesParams, "from" | "to">;
