import { WaterLogItemRow } from "./WaterLogItemRow";
import { type WaterLogListProps } from "./WaterLogList";
import { type WaterLogItem } from "../../constants";

type Props = Partial<Pick<WaterLogListProps, "onEdit" | "onDelete">> & {
  waterLogs?: WaterLogItem[];
};

export const WaterLogs = ({
  waterLogs,
  onEdit,
  onDelete,
}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {waterLogs?.map((item) => (
        <WaterLogItemRow
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
