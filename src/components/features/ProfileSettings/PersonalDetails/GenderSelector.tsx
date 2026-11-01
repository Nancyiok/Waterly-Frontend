import { useController, useFormContext } from "react-hook-form";
import { type ProfileFormValuesType } from "@/validations/schemas/profileValidation";
import { BaseSelect } from "@/components/primitives/Select";
import { GENDER } from "@/types/user";
import { PROFILE_TEXTS } from "@/constants/texts";


const GENDER_OPTIONS = [
  { value: GENDER.male, label: PROFILE_TEXTS.gender.options.male },
  { value: GENDER.female, label: PROFILE_TEXTS.gender.options.female },
  { value: GENDER.unspecified, label: PROFILE_TEXTS.gender.options.other },
];

export const GenderSelector = () => {
  const { control } = useFormContext<ProfileFormValuesType>();
  const { field } = useController({ name: "gender", control });

  return (
    <div className="flex flex-col">
      <span className="font-medium">{PROFILE_TEXTS.gender.label}</span>
      <BaseSelect
        name={field.name}
        options={GENDER_OPTIONS}
        value={GENDER_OPTIONS.find((o) => o.value === field.value) ?? null}
        onChange={(option) => field.onChange(option)}
        onBlur={field.onBlur}
        placeholder={PROFILE_TEXTS.gender.placeholder}
      />
    </div>
  );
};
