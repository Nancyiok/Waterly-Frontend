import * as z from "zod";
import {
  EMAIL_RULES,
  LOGIN_FIELS_VALIDATION,
} from "@/validations/constants/authValidationRules";

export const forgotPasswordSchema = z.object({
  [LOGIN_FIELS_VALIDATION.email]: z
    .email(EMAIL_RULES.incorrect)
    .min(1, EMAIL_RULES.required),
});

export type ForgotPasswordFormValuesType = z.infer<typeof forgotPasswordSchema>;
