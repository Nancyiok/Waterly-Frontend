import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartCard } from "../ChartCard/ChartCard";
import { ChartGradient } from "../ChartCard/ChartGradient";
import { ChartTooltip } from "../ChartCard/ChartTooltip";
import { CHART_COLORS } from "../constants";
import { STATISTICS_TEXTS } from "@/constants/texts/statistics";
import type { StatisticsDay } from "@/types/statistics";
import { formatDate } from "@/utils/formatDate";

type Props = {
  title: string;
  data: StatisticsDay[];
  dateFormat: string;
};

export const DailyIntakeChart = ({ title, data, dateFormat }: Props) => {
  const formatLabel = (date: string) => formatDate(date, dateFormat);

  return (
    <ChartCard title={title}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <ChartGradient id="dailyGradient" direction="horizontal" />
          <CartesianGrid vertical={false} stroke={CHART_COLORS.grid} />
          <XAxis dataKey="date" tickFormatter={formatLabel} tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} width={48} />
          <ChartTooltip labelFormatter={(label) => formatLabel(String(label))} />
          <Line dataKey="ml" name={STATISTICS_TEXTS.charts.seriesName} unit={STATISTICS_TEXTS.charts.unit} stroke="url(#dailyGradient)" strokeWidth={4} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
