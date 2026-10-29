import { DeleteConfirmModal } from "@/components/primitives/DeleteConfirmModal";
import { useDeleteWaterIntake } from "@/hooks/useWaterIntake";
import { successToast } from "@/hooks/useToast/useToast";
import { formatTime } from "@/utils/formatTime";
import { type WaterLogItem } from "./constants";
import { HOME_TEXTS } from "@/constants/texts/home";

type Props = {
  item: WaterLogItem | null;
  onClose: () => void;
};

export const DeleteWaterLogModal = ({ item, onClose }: Props) => {
  const { mutate: deleteIntake, isPending } = useDeleteWaterIntake();

  const handleConfirm = () => {
    if (!item) return;
    deleteIntake(item.id, {
      onSuccess: () => {
        onClose();
        successToast({ message: HOME_TEXTS.toasts.removed });
      },
    });
  };

  return (
    <DeleteConfirmModal
      isOpen={!!item}
      title={HOME_TEXTS.deleteModal.title}
      message={
        item
          ? HOME_TEXTS.deleteModal.message(item.ml, formatTime(item.date))
          : ""
      }
      isLoading={isPending}
      onConfirm={handleConfirm}
      onClose={onClose}
    />
  );
};
