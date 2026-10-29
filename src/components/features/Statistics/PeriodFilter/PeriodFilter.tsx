import { PeriodTabs } from "./PeriodTabs";
import type { StatsPeriod } from "../constants";

type Props = {
  period: StatsPeriod;
  onPeriodChange: (period: StatsPeriod) => void;
};

export const PeriodFilter = ({ period, onPeriodChange }: Props) => (
  <PeriodTabs value={period} onChange={onPeriodChange} />
);
