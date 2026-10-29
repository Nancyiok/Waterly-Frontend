import { Button } from "@/components/primitives/Button";
import { HOME_TEXTS } from "@/constants/texts/home";
type Props = {
  formId: string;
  editItem: boolean;
  onClose: () => void
};

export const AddWaterFooter = ({formId, editItem, onClose}: Props) => {
  return (
    <div className="flex items-center justify-end gap-3">
      <Button
        type="button"
        variant="outline"
        onClick={onClose}
      >
        {HOME_TEXTS.addWaterModal.cancelButton}
      </Button>
      <Button type="submit" form={formId}>
        {editItem ? HOME_TEXTS.addWaterModal.saveButton : HOME_TEXTS.addWaterModal.addButton}
      </Button>
    </div>
  );
};
