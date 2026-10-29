import { Tooltip, type TooltipProps } from "recharts";
import { CHART_COLORS } from "../constants";

type Props = Pick<TooltipProps<number, string>, "labelFormatter">;

export const ChartTooltip = ({ labelFormatter }: Props) => (
  <Tooltip
    cursor={{ fill: CHART_COLORS.cursor }}
    contentStyle={{ borderRadius: 4 }}
    labelFormatter={labelFormatter}
  />
);
