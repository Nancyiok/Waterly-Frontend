import { Icon } from "@iconify/react";
import classNames from "classnames";
import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  description?: ReactNode;
  icon?: string;
  iconClassName?: string;
  className?: string;
};

export const SectionHeading = ({
  title,
  description,
  icon,
  iconClassName,
  className = "mb-6",
}: Props) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      {icon && <Icon icon={icon} className={classNames("size-5", iconClassName)} />}
      <h2 className="text-xl font-bold text-neutral-900">{title}</h2>
    </div>
    {description && <p className="mt-1 text-neutral-500">{description}</p>}
  </div>
);
