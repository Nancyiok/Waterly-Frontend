import FormInputValidation from "@/validations/FormInputValidation";
import { HOME_TEXTS } from "@/constants/texts/home";

export const AddWaterAmount = () => {
  return (
    <FormInputValidation
      name="amount"
      type="number"
      label={HOME_TEXTS.addWaterModal.amountLabel}
      leftIcon="mdi:cup-water"
    />
  );
};
