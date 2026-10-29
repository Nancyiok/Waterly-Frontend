import { BasePanel } from "@/components/primitives/BasePanel";
import { PhotoCard } from "@/components/primitives/PhotoCard";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import type { GoalOption } from "../constants";
import { formatExtraWater } from "../utils";

type Props<T extends string> = {
  title: string;
  icon: string;
  iconClassName: string;
  description?: string;
  options: GoalOption<T>[];
  value: T;
  onChange: (value: T) => void;
};

export const OptionsPanel = <T extends string>({
  title,
  icon,
  iconClassName,
  description,
  options,
  value,
  onChange,
}: Props<T>) => (
  <BasePanel>
    <SectionHeading
      title={title}
      icon={icon}
      iconClassName={iconClassName}
      description={description}
    />
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {options.map((option) => (
        <PhotoCard
          key={option.value}
          image={option.image}
          title={option.label}
          subtitle={option.subtitle}
          extraLabel={formatExtraWater(option.extra)}
          isActive={value === option.value}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  </BasePanel>
);
