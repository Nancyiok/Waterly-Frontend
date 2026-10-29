import { Icon } from "@iconify/react";
import { Button } from "@/components/primitives/Button";

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export const WaterLogActions = ({ onEdit, onDelete }: Props) => {
  return (
    <div className="flex items-center gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
      <Button onClick={onEdit} shape="square" size="sm" variant="secondary">
        <Icon icon="lucide:pencil" className="size-4" />
      </Button>
      <Button onClick={onDelete} variant="danger" shape="square" size="sm">
        <Icon icon="lucide:trash-2" className="size-4" />
      </Button>
    </div>
  );
};
