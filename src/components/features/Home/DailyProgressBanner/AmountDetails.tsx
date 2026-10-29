import { HOME_TEXTS } from "@/constants/texts/home";
type Props = {
  currentAmount: number;
  dailyGoal: number;
};

export const AmountDetails = ({ currentAmount, dailyGoal }: Props) => {
  return (
    <div className="space-y-3">
      <span className="block font-medium text-white/80">
        {HOME_TEXTS.progress.title}
      </span>

      <div className="flex items-baseline gap-2">
        <span className="text-4xl lg:text-5xl font-black tracking-tight text-white">
          {currentAmount}
        </span>
        <span className="text-base sm:text-lg text-white/80">
          / {dailyGoal} ml
        </span>
      </div>
    </div>
  );
};
