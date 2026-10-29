import { Icon } from "@iconify/react";
import { Button } from "@/components/primitives/Button";
import { AmountDetails } from "./AmountDetails";
import { BasePanel } from "@/components/primitives/BasePanel";
import { PercentageHuman } from "./PercentageHuman";
import { BannerBubbles } from "./BannerBubbles";
import { OverhydrationWarning } from "./OverhydrationWarning";
import { type WaterLogItem } from "../constants";
import { HOME_TEXTS } from "@/constants/texts/home";

type Props = {
  currentAmount: number;
  dailyGoal: number;
  percentage: number;
  lastLog?: WaterLogItem;
  onOpenAddModal: () => void;
};

export const DailyProgressHero = ({
  currentAmount,
  dailyGoal,
  percentage,
  onOpenAddModal,
}: Props) => {
  const isOverhydrated = dailyGoal > 0 && currentAmount > dailyGoal;

  return (
    <BasePanel variant="sky-gradient" className="relative overflow-hidden shadow-lg">
      <BannerBubbles />

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
        <div className="mx-auto sm:mx-0">
          <PercentageHuman percentage={percentage} width={100} height={200} />
        </div>

        <div className="flex-1 space-y-5">
          <div className="space-y-3">
            <AmountDetails currentAmount={currentAmount} dailyGoal={dailyGoal} />
            {isOverhydrated && <OverhydrationWarning />}
          </div>

          <Button
            variant="white"
            shape="pill"
            onClick={onOpenAddModal}
            className="w-full sm:w-auto"
          >
            <Icon icon="mdi:water-plus" className="size-6 text-primary" />
            <span>{HOME_TEXTS.progress.addDrinkButton}</span>
          </Button>
        </div>
      </div>
    </BasePanel>
  );
};
