import { CHART_COLORS } from "../constants";

type Props = {
  id: string;
  direction?: "vertical" | "horizontal";
};

export const ChartGradient = ({ id, direction = "vertical" }: Props) => (
  <defs>
    <linearGradient id={id} x1="0" y1="0" x2={direction === "horizontal" ? "1" : "0"} y2={direction === "vertical" ? "1" : "0"}>
      <stop offset="0%" stopColor={CHART_COLORS.from} />
      <stop offset="100%" stopColor={CHART_COLORS.to} />
    </linearGradient>
  </defs>
);
