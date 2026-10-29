import { BasePanel } from "@/components/primitives/BasePanel";
import classNames from "classnames";
import { Icon } from "@iconify/react";
import { type ReactNode } from "react";

type Props = {
    title: string,
    icon: string,
    iconClassName?: string,
    value: ReactNode,
    unit?: string,
    description: ReactNode,
    hoverable?: boolean,
    onClick?: () => void
}

const MetricCard = ({title, icon, iconClassName = "text-primary-dark", value, unit, description, hoverable = false, onClick}: Props) => {
  return (
    <BasePanel hoverable={hoverable} onClick={onClick} className="text-left">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-neutral-900">
            {title}
          </span>
          <Icon icon={icon} className={classNames("size-8", iconClassName)} />
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="text-3xl font-extrabold text-neutral-900">{value}</span>
          {unit && <span className="font-semibold">{unit}</span>}
        </div>
      </div>
      <div className="mt-3">{description}</div>
    </BasePanel>
  );
};

export default MetricCard;
