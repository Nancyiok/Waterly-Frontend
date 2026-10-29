import MetricCard from "@/components/features/Home/MetricCards/MetricCard";
import type { StatisticsSummary } from "@/types/statistics";
import { STATISTICS_TEXTS } from "@/constants/texts/statistics";
import { formatDate } from "@/utils/formatDate";
import { DATE_FORMATS } from "@/constants/dateFormats";

type Props = {
  summary: StatisticsSummary;
};

export const StatsSummaryCards = ({ summary }: Props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
    <MetricCard
      title={STATISTICS_TEXTS.summary.average}
      icon="mdi:water-outline"
      iconClassName="text-primary"
      value={summary.averageMl ?? 0}
      unit={STATISTICS_TEXTS.units.ml}
      description={STATISTICS_TEXTS.summary.averageDescription}
    />
    <MetricCard
      title={STATISTICS_TEXTS.summary.total}
      icon="lucide:glass-water"
      iconClassName="text-accent"
      value={summary.totalMl ?? 0}
      unit={STATISTICS_TEXTS.units.liters}
      description={STATISTICS_TEXTS.summary.totalDescription}
    />
    <MetricCard
      title={STATISTICS_TEXTS.summary.bestDay}
      icon="lucide:trophy"
      iconClassName="text-warning"
      value={summary.bestDay?.ml ?? 0}
      unit={STATISTICS_TEXTS.units.ml}
      description={
        summary.bestDay
          ? formatDate(summary.bestDay.date, DATE_FORMATS.weekDayDayMonth)
          : STATISTICS_TEXTS.summary.noRecords
      }
    />
    <MetricCard
      title={STATISTICS_TEXTS.summary.activeDays}
      icon="lucide:calendar-check"
      iconClassName="text-success"
      value={summary.activeDays}
      unit={STATISTICS_TEXTS.units.days(summary.totalDays)}
      description={STATISTICS_TEXTS.summary.activeDaysDescription}
    />
  </div>
);
