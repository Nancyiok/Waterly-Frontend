import { Icon } from "@iconify/react";
import { Button } from "@/components/primitives/Button";
import { COMMON_TEXTS } from "@/constants/texts/common";

type Props = {
  onRetry: () => void;
};

export const ErrorState = ({ onRetry }: Props) => (
  <div className="py-16 grid place-items-center text-center gap-2">
    <Icon icon="lucide:circle-alert" className="size-14 text-danger" />
    <p className="font-semibold text-neutral-800">{COMMON_TEXTS.errors.loadFailedTitle}</p>
    <p className="text-neutral-400 mt-1">{COMMON_TEXTS.errors.loadFailedDescription}</p>
    <Button variant="secondary" size="sm" className="mt-3" onClick={onRetry}>
      {COMMON_TEXTS.retryButton}
    </Button>
  </div>
);
