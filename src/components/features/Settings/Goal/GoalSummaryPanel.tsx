import classNames from "classnames";
import { Icon } from "@iconify/react";
import { BasePanel } from "@/components/primitives/BasePanel";
import { Button } from "@/components/primitives/Button";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { COMMON_TEXTS } from "@/constants/texts";
import type { GoalPart } from "../constants";
import { SETTINGS_TEXTS } from "@/constants/texts/settings";

type Props = {
  total: number;
  newTotal: number;
  parts: GoalPart[];
  onSave: () => void;
  onReset: () => void;
  isWaterPartsChanged: boolean;
};

export const GoalSummaryPanel = ({
  total,
  newTotal,
  parts,
  onSave,
  onReset,
  isWaterPartsChanged,
}: Props) => (
  <BasePanel className="space-y-6">
    <div className="flex items-start justify-between gap-3">
      <SectionHeading
        title={
          isWaterPartsChanged
            ? SETTINGS_TEXTS.goalSummary.newTitle
            : SETTINGS_TEXTS.goalSummary.title
        }
        icon="lucide:target"
        iconClassName="text-primary"
        className=""
      />
      {isWaterPartsChanged && (
        <BasePanel
          variant="warning"
          className="w-fit flex-row! items-center gap-1.5 whitespace-nowrap px-2.5! py-1!"
        >
          <Icon
            icon="lucide:pen-line"
            className="size-4 shrink-0 text-warning"
          />
          {SETTINGS_TEXTS.goalSummary.unsaved}
        </BasePanel>
      )}
    </div>

    <div className="flex items-baseline gap-1.5 font-semibold">
      <span
        className={classNames(
          "text-3xl font-extrabold",
          isWaterPartsChanged && "text-primary",
        )}
      >
        {newTotal}
      </span>
      {COMMON_TEXTS.units.ml}
      {isWaterPartsChanged && (
        <s className="ml-2 font-normal text-neutral-400">{total} {COMMON_TEXTS.units.ml}</s>
      )}
    </div>

    <div className="space-y-3 font-semibold">
      {parts.map(({ key, icon, label, amount }, index) => (
        <div key={key} className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foam text-primary">
              <Icon icon={icon} className="size-5" />
            </div>
            {label}
          </div>
          <span className="font-bold">
            {index > 0 && "+"}
            {amount} <span className="font-normal">{COMMON_TEXTS.units.ml}</span>
          </span>
        </div>
      ))}
    </div>

    <div className="space-y-2">
      <Button
        size="lg"
        className="w-full"
        onClick={onSave}
        disabled={!isWaterPartsChanged}
      >
        {SETTINGS_TEXTS.goalSummary.saveButton}
      </Button>
      {isWaterPartsChanged && (
        <Button variant="ghost" className="w-full" onClick={onReset}>
          <Icon icon="lucide:rotate-ccw" className="size-4" />
          {SETTINGS_TEXTS.goalSummary.resetButton}
        </Button>
      )}
    </div>
  </BasePanel>
);
