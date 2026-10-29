import { useUserProfileInfo } from "@/store/useUserProfileInfo";
import { GENDER, type Gender } from "@/types/user";
import { type HumanFigureProps } from "./HumanSvg";
import { MaleSvg } from "./MaleSvg";
import { FemaleSvg } from "./FemaleSvg";
import { GlassSvg } from "./GlassSvg";

type RenderFigureProps = HumanFigureProps & {
  userGender?: Gender;
};

const RenderFigure = ({ userGender, ...figureProps }: RenderFigureProps) => {
  if (userGender === GENDER.male) {
    return <MaleSvg {...figureProps} />;
  } else if (userGender === GENDER.female) {
    return <FemaleSvg {...figureProps} />;
  }
  return <GlassSvg {...figureProps} />;
};

type Props = Omit<HumanFigureProps, "percent"> & {
  percentage: number;
};

export const PercentageHuman = ({ percentage, ...figureProps }: Props) => {
  const userGender = useUserProfileInfo((state) => state.user?.gender);

  return (
    <div className="relative flex shrink-0 items-center justify-center">
      <RenderFigure userGender={userGender} percent={percentage} {...figureProps} />
      <span className="absolute text-sm sm:text-xl font-black leading-tight text-neutral-800 tracking-tight">
        {percentage}%
      </span>
    </div>
  );
};
