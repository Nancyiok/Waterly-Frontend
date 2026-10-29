import { HumanSvg, type HumanFigureProps } from "./HumanSvg";
import { FEMALE_D, FEMALE_VIEWBOX } from "./constants";

export const FemaleSvg = (props: HumanFigureProps) => (
  <HumanSvg path={FEMALE_D} viewBox={FEMALE_VIEWBOX} {...props} />
);
