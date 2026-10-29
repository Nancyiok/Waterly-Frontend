import {BasePanel} from "@/components/primitives/BasePanel";
import {FormInputValidation} from "@/validations/FormInputValidation";
import {PROFILE_FIELS_VALIDATION} from "@/validations/constants/profileValidationRules";

const BODY_PARAMETERS_FIELDS = [
  {
    name: PROFILE_FIELS_VALIDATION.weight,
    type: "number",
    label: "Weight, kg",
    leftIcon: "mdi:weight-kilogram",
    isOptional: true,
  },
];

export const BodyParameters = () => {
  return (
    <BasePanel>
      <h2 className="font-bold">Body Parameters</h2>
      <p className="mt-2">
        Helps calculate your personal daily intake more accurately.
      </p>
      <div className="mt-10 grid grid-cols-2 gap-5">
        {BODY_PARAMETERS_FIELDS.map((field) => (
          <FormInputValidation key={field.name} {...field} />
        ))}
      </div>
    </BasePanel>
  );
};

export default BodyParameters;
