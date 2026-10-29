import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { ChartCard } from "../../ChartCard/ChartCard";
import { ChartGradient } from "../../ChartCard/ChartGradient";
import { GoalCompletionLabel } from "./GoalCompletionLabel";
import { CHART_COLORS } from "../../constants";
import { STATISTICS_TEXTS } from "@/constants/texts/statistics";

type Props = {
  percentage: number;
  goalDays: number;
  totalDays: number;
};

export const GoalCompletionChart = ({
  percentage,
  goalDays,
  totalDays,
}: Props) => (
  <ChartCard title={STATISTICS_TEXTS.goalCompletion.title}>
    <div className="relative h-full">
      <ResponsiveContainer>
        <RadialBarChart
          data={[{ value: percentage }]}
          innerRadius="68%"
          outerRadius="80%"
          startAngle={90}
          endAngle={-270}
        >
          <ChartGradient id="goalGradient" direction="horizontal" />
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            dataKey="value"
            fill="url(#goalGradient)"
            background={{ fill: CHART_COLORS.track }}
            cornerRadius={8}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <GoalCompletionLabel
        percentage={percentage}
        goalDays={goalDays}
        totalDays={totalDays}
      />
    </div>
  </ChartCard>
);
