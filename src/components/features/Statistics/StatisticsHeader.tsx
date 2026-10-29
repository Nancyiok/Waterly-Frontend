import { PageHeader } from "@/components/primitives/PageHeader";
import { PeriodFilter } from "./PeriodFilter/PeriodFilter";
import type { StatsPeriod } from "./constants";
import { STATISTICS_TEXTS } from "@/constants/texts/statistics";

type Props = {
  period: StatsPeriod;
  onPeriodChange: (period: StatsPeriod) => void;
};

export const StatisticsHeader = ({ period, onPeriodChange }: Props) => (
  <PageHeader
    title={STATISTICS_TEXTS.title}
    description={STATISTICS_TEXTS.description}
    actions={<PeriodFilter period={period} onPeriodChange={onPeriodChange} />}
  />
);
