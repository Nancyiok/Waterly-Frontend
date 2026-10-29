import { Button } from "@/components/primitives/Button";

type Props = {
  confirmLabel: string;
  cancelLabel: string;
  isLoading: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

export const DeleteConfirmFooter = ({
  confirmLabel,
  cancelLabel,
  isLoading,
  onConfirm,
  onClose,
}: Props) => (
  <div className="flex items-center justify-end gap-3 mt-6">
    <Button
      type="button"
      variant="outline"
      onClick={onClose}
      disabled={isLoading}
    >
      {cancelLabel}
    </Button>
    <Button
      type="button"
      variant="danger"
      onClick={onConfirm}
      disabled={isLoading}
      isLoading={isLoading}
    >
      {confirmLabel}
    </Button>
  </div>
);
