import { STATS_PERIODS, type StatsPeriod } from "../constants";
import { Tabs } from "@/components/primitives/Tabs";

type Props = {
  value: StatsPeriod;
  onChange: (period: StatsPeriod) => void;
};

export const PeriodTabs = ({ value, onChange }: Props) => (
  <Tabs
    tabs={STATS_PERIODS}
    selectedValue={value}
    onSelectedValueChange={onChange}
  />
);
