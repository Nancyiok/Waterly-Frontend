import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
};

export const PageHeader = ({ title, description, actions }: Props) => (
  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
    <div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900">
        {title}
      </h1>
      {description && <p className="mt-1 text-neutral-500">{description}</p>}
    </div>
    {actions}
  </div>
);
