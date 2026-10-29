import { useController, useFormContext } from "react-hook-form";
import { type ProfileFormValuesType } from "@/validations/schemas/profileValidation";
import { BaseSelect } from "@/components/primitives/Select";
import { GENDER } from "@/types/user";


const GENDER_OPTIONS = [
  { value: GENDER.male, label: "Male" },
  { value: GENDER.female, label: "Female" },
  { value: GENDER.unspecified, label: "Other" },
];

export const GenderSelector = () => {
  const { control } = useFormContext<ProfileFormValuesType>();
  const { field } = useController({ name: "gender", control });

  return (
    <div className="flex flex-col">
      <span className="font-medium">Gender</span>
      <BaseSelect
        name={field.name}
        options={GENDER_OPTIONS}
        value={GENDER_OPTIONS.find((o) => o.value === field.value) ?? null}
        onChange={(option) => field.onChange(option)}
        onBlur={field.onBlur}
        placeholder="Select gender"
      />
    </div>
  );
};
