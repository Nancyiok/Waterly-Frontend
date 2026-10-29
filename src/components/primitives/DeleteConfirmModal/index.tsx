import { BaseModal } from "@/components/primitives/BaseModal";
import { DeleteConfirmContent } from "./DeleteConfirmContent";
import { DeleteConfirmFooter } from "./DeleteConfirmFooter";

type Props = {
  isOpen: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

export const DeleteConfirmModal = ({
  isOpen,
  title,
  message,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  isLoading = false,
  onConfirm,
  onClose,
}: Props) => {
  return (
    <BaseModal isOpen={isOpen} onClose={isLoading ? undefined : onClose}>
      <DeleteConfirmContent title={title} message={message} />
      <DeleteConfirmFooter
        confirmLabel={confirmLabel}
        cancelLabel={cancelLabel}
        isLoading={isLoading}
        onConfirm={onConfirm}
        onClose={onClose}
      />
    </BaseModal>
  );
};
