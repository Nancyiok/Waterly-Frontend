export type StatisticsPeriod = "week" | "month" | "year";

export type StatisticsDay = {
  date: string;
  ml: number;
};

export type StatisticsBar = {
  from: string;
  to: string;
  ml: number;
};

export type StatisticsSummary = {
  totalMl: number;
  averageMl: number;
  bestDay: StatisticsDay | null;
  activeDays: number;
  totalDays: number;
};

export type GoalCompletion = {
  percentage: number;
  goalDays: number;
  totalDays: number;
};

export type Statistics = {
  summary: StatisticsSummary;
  lineChart: StatisticsDay[];
  barChart: StatisticsBar[];
  goalCompletion: GoalCompletion | null;
};
