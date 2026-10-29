import { Icon } from "@iconify/react";
import { BasePanel } from "@/components/primitives/BasePanel";
import { HOME_TEXTS } from "@/constants/texts/home";

export const OverhydrationWarning = () => (
  <BasePanel
    variant="warning"
    className="w-fit flex-row! justify-start! items-start gap-2 px-3! py-2!"
  >
    <Icon icon="lucide:triangle-alert" className="size-5 shrink-0 text-warning" />
    <span>
      <span className="font-semibold">{HOME_TEXTS.overhydration.title}.</span>{" "}
      {HOME_TEXTS.overhydration.message}
    </span>
  </BasePanel>
);
