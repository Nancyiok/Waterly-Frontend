import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  aside: ReactNode;
};

export const GoalLayout = ({ children, aside }: Props) => (
  <div className="grid lg:grid-cols-12 gap-8 items-start">
    <div className="lg:col-span-7 space-y-6">{children}</div>
    <div className="lg:col-span-5 lg:sticky lg:top-24">{aside}</div>
  </div>
);
