import { HumanSvg, type HumanFigureProps } from "./HumanSvg";
import { MALE_D, MALE_VIEWBOX } from "./constants";

export const MaleSvg = (props: HumanFigureProps) => (
  <HumanSvg path={MALE_D} viewBox={MALE_VIEWBOX} {...props} />
);
