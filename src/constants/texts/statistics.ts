export const STATISTICS_TEXTS = {
  title: "Statistics",
  description: "How much you drink over time",
  periods: {
    week: "Week",
    month: "Month",
    year: "Year",
  },
  units: {
    ml: "ml",
    liters: "L",
    days: (totalDays: number) => `of ${totalDays} days`,
  },
  summary: {
    average: "Average per day",
    averageDescription: "On days with drinks",
    total: "Total",
    totalDescription: "All drinks combined",
    bestDay: "Best day",
    noRecords: "No records yet",
    activeDays: "Active days",
    activeDaysDescription: "Days with at least one drink",
  },
  charts: {
    seriesName: "Water",
    unit: " ml",
    daily: {
      week: "Water by day",
      month: "Water by day",
      year: "Average per day by month",
    },
    grouped: {
      week: "",
      month: "Weekly totals",
      year: "Monthly totals",
    },
  },
  goalCompletion: {
    title: "Goal completion",
    daysOf: (goalDays: number, totalDays: number) => `${goalDays} of ${totalDays} days`,
  },
} as const;
