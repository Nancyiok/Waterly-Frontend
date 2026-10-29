import { Icon } from "@iconify/react";

type Props = {
  className?: string;
};

export const Spinner = ({ className = "size-6" }: Props) => (
  <Icon icon="svg-spinners:180-ring" className={className} />
);
