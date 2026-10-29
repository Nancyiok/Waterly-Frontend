import { Icon } from "@iconify/react";
import { HOME_TEXTS } from "@/constants/texts/home";

type Props = {
  title?: string;
  description?: string;
};

export const WaterLogEmpty = ({
  title = HOME_TEXTS.waterLog.emptyTitle,
  description = HOME_TEXTS.waterLog.emptyDescription,
}: Props) => {
  return (
    <div className="py-16 grid place-items-center text-center gap-2">
      <Icon icon="lucide:glass-water" className="size-14 text-primary" />
      <p className="font-semibold text-neutral-800">{title}</p>
      <p className="text-neutral-400 mt-1">{description}</p>
    </div>
  );
};
