import { useId } from "react";
import { FillGradient } from "./FillGradient";

export type HumanFigureProps = {
  percent: number;
  fillColor?: string;
  emptyColor?: string;
  borderColor?: string;
  borderWidth?: number;
  width?: number;
  height?: number;
};

type Props = HumanFigureProps & {
  path: string;
  viewBox: string;
};

export const HumanSvg = ({
  path,
  viewBox,
  percent,
  fillColor = "white",
  emptyColor = "transparent",
  borderColor = "white",
  borderWidth = 2,
  width = 100,
  height = 200,
}: Props) => {
  const gradientId = `human-grad-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      overflow="visible"
    >
      <FillGradient
        id={gradientId}
        percent={percent}
        fillColor={fillColor}
        emptyColor={emptyColor}
      />
      <path
        d={path}
        fill={`url(#${gradientId})`}
        stroke={borderColor}
        strokeWidth={borderWidth}
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
};
