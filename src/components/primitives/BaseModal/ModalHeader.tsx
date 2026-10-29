import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ModalHeader = ({ children }: Props) => (
  <div className="pr-10 pb-4 border-b border-neutral-100">{children}</div>
);
