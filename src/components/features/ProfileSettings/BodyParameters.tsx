import {BasePanel} from "@/components/primitives/BasePanel";
import {FormInputValidation} from "@/validations/FormInputValidation";
import {PROFILE_FIELS_VALIDATION} from "@/validations/constants/profileValidationRules";
import {PROFILE_TEXTS} from "@/constants/texts";

const BODY_PARAMETERS_FIELDS = [
  {
    name: PROFILE_FIELS_VALIDATION.weight,
    type: "number",
    label: PROFILE_TEXTS.bodyParameters.weightLabel,
    leftIcon: "mdi:weight-kilogram",
    isOptional: true,
  },
];

export const BodyParameters = () => {
  return (
    <BasePanel>
      <h2 className="font-bold">{PROFILE_TEXTS.bodyParameters.title}</h2>
      <p className="mt-2">
        {PROFILE_TEXTS.bodyParameters.description}
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
