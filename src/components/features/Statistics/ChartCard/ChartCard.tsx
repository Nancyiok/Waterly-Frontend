import type { ReactNode } from "react";
import { BasePanel } from "@/components/primitives/BasePanel";
import { ChartCardHeader } from "./ChartCardHeader";

type Props = {
  title: string;
  children: ReactNode;
};

export const ChartCard = ({ title, children }: Props) => (
  <BasePanel className="h-full gap-6">
    <ChartCardHeader title={title} />
    <div className="h-72">{children}</div>
  </BasePanel>
);
