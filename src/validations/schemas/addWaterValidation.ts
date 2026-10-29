import * as z from "zod";
import {
  ADD_WATER_LIMITS,
  ADD_WATER_VALIDATION_MESSAGES as MESSAGES,
} from "@/validations/constants/addWaterValidationRules";

export const addWaterSchema = z.object({
  amount: z
    .string()
    .nonempty(MESSAGES.amount.required)
    .pipe(
      z.coerce
        .number<string>()
        .int(MESSAGES.amount.int)
        .min(ADD_WATER_LIMITS.amountMin, MESSAGES.amount.min)
        .max(ADD_WATER_LIMITS.amountMax, MESSAGES.amount.max)
    ),
});

export type AddWaterFormValuesType = z.infer<typeof addWaterSchema>;
