import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ModalFooter = ({ children }: Props) => (
  <div className="pt-4 border-t border-neutral-100">{children}</div>
);
