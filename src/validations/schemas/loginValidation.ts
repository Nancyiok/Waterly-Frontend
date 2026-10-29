import * as z from "zod";
import {
  EMAIL_RULES,
  PASSWORD_RULES,
  MIN_PASSWORD_LENGTH,
  SIGN_UP_VALIDATION_FIELDS
} from "@/validations/constants/authValidationRules";

export const logInSchema = z.object({
  [SIGN_UP_VALIDATION_FIELDS.email]: z.email(EMAIL_RULES.incorrect).min(1, EMAIL_RULES.required),
  [SIGN_UP_VALIDATION_FIELDS.password]: z.string().min(MIN_PASSWORD_LENGTH, PASSWORD_RULES.min),
});

export type LoginFormValuesType = z.infer<typeof logInSchema>;
