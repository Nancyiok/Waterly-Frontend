import { Icon } from "@iconify/react";
import { type WaterLogItem } from "../../constants";
import { WaterLogActions } from "./WaterLogActions";
import { BasePanel } from "@/components/primitives/BasePanel";
import { formatTime } from "@/utils/formatTime";
import { HOME_TEXTS } from "@/constants/texts/home";

type Props = {
  item: WaterLogItem;
  onEdit?: (item: WaterLogItem) => void;
  onDelete?: (id: number) => void;
};

export const WaterLogItemRow = ({ item, onEdit, onDelete }: Props) => {
  return (
    <BasePanel
      hoverable
      className="group flex-row! items-center p-3!"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foam text-primary">
          <Icon icon="lucide:glass-water" className="size-5" />
        </div>
        <div>
          <span className="font-semibold text-neutral-900 block">{HOME_TEXTS.waterLog.itemTitle}</span>
          <span>{formatTime(item.date)}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-bold text-base text-neutral-900">
          +{item.ml} <span className="font-normal">ml</span>
        </span>
        {onEdit && onDelete && (
          <WaterLogActions
            onEdit={() => onEdit(item)}
            onDelete={() => onDelete(item.id)}
          />
        )}
      </div>
    </BasePanel>
  );
};
