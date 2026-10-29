import { PhotoCard } from "@/components/primitives/PhotoCard";
import { useFormContext, useWatch } from "react-hook-form";
import { INITIAL_CUP_SIZES } from "../constants";
import { HOME_TEXTS } from "@/constants/texts/home";

export const AddWaterPortionSize = () => {
  const { control, setValue } = useFormContext();
  const amount = Number(useWatch({ control, name: "amount" }));

  return (
    <div>
      <label className="font-medium block mb-2">
        {HOME_TEXTS.addWaterModal.portionSizeLabel}
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {INITIAL_CUP_SIZES.map((portion) => (
          <PhotoCard
            key={portion.id}
            image={portion.image}
            title={portion.label}
            subtitle={`${portion.amount} ml`}
            isActive={amount === portion.amount}
            onClick={() =>
              setValue("amount", String(portion.amount), { shouldValidate: true })
            }
          />
        ))}
      </div>
    </div>
  );
};
