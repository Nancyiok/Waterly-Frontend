import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartCard } from "../ChartCard/ChartCard";
import { ChartGradient } from "../ChartCard/ChartGradient";
import { ChartTooltip } from "../ChartCard/ChartTooltip";
import { CHART_COLORS } from "../constants";
import { STATISTICS_TEXTS } from "@/constants/texts/statistics";
import type { StatisticsBar } from "@/types/statistics";

type Props = {
  title: string;
  data: StatisticsBar[];
  formatLabel: (bar: StatisticsBar) => string;
};

export const GroupedIntakeChart = ({ title, data, formatLabel }: Props) => (
  <ChartCard title={title}>
    <ResponsiveContainer>
      <BarChart data={data}>
        <ChartGradient id="groupedGradient" />
        <CartesianGrid vertical={false} stroke={CHART_COLORS.grid} />
        <XAxis
          dataKey="from"
          tickFormatter={(_, index) => formatLabel(data[index])}
          tickLine={false}
          axisLine={false}
        />
        <YAxis tickLine={false} axisLine={false} width={56} />
        <ChartTooltip labelFormatter={(_, payload) => (payload[0] ? formatLabel(payload[0].payload) : "")} />
        <Bar dataKey="ml" name={STATISTICS_TEXTS.charts.seriesName} unit={STATISTICS_TEXTS.charts.unit} fill="url(#groupedGradient)" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </ChartCard>
);
