import { StatisticsHeader } from "./StatisticsHeader";
import { StatsSummaryCards } from "./StatsSummaryCards/StatsSummaryCards";
import { DailyIntakeChart } from "./Charts/DailyIntakeChart";
import { GroupedIntakeChart } from "./Charts/GroupedIntakeChart";
import { GoalCompletionChart } from "./Charts/GoalCompletionChart/GoalCompletionChart";
import { LINE_DATE_FORMATS, type StatsPeriod } from "./constants";
import { formatBarLabel } from "./utils";
import { StatisticsSkeleton } from "./StatisticsSkeleton";
import { BasePanel } from "@/components/primitives/BasePanel";
import { ErrorState } from "@/components/primitives/ErrorState";
import { useStatistics } from "@/hooks/useStatistics";
import { STATISTICS_TEXTS } from "@/constants/texts/statistics";
import { useSearchParamsManager } from "@/hooks/useSearchParamsManager";

export const StatisticsDashboard = () => {
  const { params, setParams } = useSearchParamsManager();
  const period = (params.period as StatsPeriod) || "week";

  const handlePeriodChange = (period: StatsPeriod) => {
    setParams({ period });
  };

  const { data: stats, isLoading, isError, refetch } = useStatistics(period);

  return (
    <div className="w-full max-w-full space-y-8">
      <StatisticsHeader period={period} onPeriodChange={handlePeriodChange} />

      {isLoading && <StatisticsSkeleton />}

      {isError && (
        <BasePanel>
          <ErrorState onRetry={refetch} />
        </BasePanel>
      )}

      {stats && (
        <>
          <StatsSummaryCards summary={stats.summary} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className={stats.goalCompletion ? "lg:col-span-8" : "lg:col-span-12"}>
              <DailyIntakeChart
                title={STATISTICS_TEXTS.charts.daily[period]}
                data={stats.lineChart}
                dateFormat={LINE_DATE_FORMATS[period]}
              />
            </div>
            {stats.goalCompletion && (
              <div className="lg:col-span-4">
                <GoalCompletionChart {...stats.goalCompletion} />
              </div>
            )}
            {stats.barChart.length > 0 && (
              <div className="lg:col-span-12">
                <GroupedIntakeChart
                  title={STATISTICS_TEXTS.charts.grouped[period]}
                  data={stats.barChart}
                  formatLabel={(bar) => formatBarLabel(bar, period)}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};
