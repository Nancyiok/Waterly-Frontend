import { BasePanel } from "@/components/primitives/BasePanel";
import { PhotoCard } from "@/components/primitives/PhotoCard";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { ADDITIONAL_FACTOR_OPTIONS, type FactorKey, type Factors } from "../constants";
import { formatExtraWater } from "../utils";
import { SETTINGS_TEXTS } from "@/constants/texts/settings";

type Props = {
  factors: Factors;
  onChange: (key: FactorKey, checked: boolean) => void;
};

export const AdditionalFactorsPanel = ({ factors, onChange }: Props) => (
  <BasePanel>
    <SectionHeading
      title={SETTINGS_TEXTS.goalOptions.factorsTitle}
      description={SETTINGS_TEXTS.goalOptions.factorsDescription}
    />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {ADDITIONAL_FACTOR_OPTIONS.map((option) => (
        <PhotoCard
          key={option.key}
          image={option.image}
          title={option.title}
          subtitle={option.description}
          extraLabel={formatExtraWater(option.extra)}
          isActive={factors[option.key]}
          onClick={() => onChange(option.key, !factors[option.key])}
        />
      ))}
    </div>
  </BasePanel>
);
