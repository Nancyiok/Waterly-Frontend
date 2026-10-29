import { Button } from "../Button";
import { Icon } from "@iconify/react";

type Props = {
  onClose?: () => void;
};

export const ModalCloseButton = ({ onClose }: Props) => (
  <Button
    type="button"
    onClick={onClose}
    variant="ghost"
    shape="circle"
    size="sm"
    className="absolute top-4 right-4"
    aria-label="Close"
  >
    <Icon icon="lucide:x" className="size-5" />
  </Button>
);
