import { HumanSvg, type HumanFigureProps } from "./HumanSvg";
import { GLASS_D, GLASS_VIEWBOX } from "./constants";

export const GlassSvg = (props: HumanFigureProps) => (
  <HumanSvg path={GLASS_D} viewBox={GLASS_VIEWBOX} {...props} />
);
