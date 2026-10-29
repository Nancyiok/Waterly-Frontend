import * as z from "zod";
import {
  CONFIRM_PASSWORD,
  SIGN_UP_VALIDATION_FIELDS,
} from "@/validations/constants/authValidationRules";
import { PASSWORD_SIGN_UP_SCHEMA } from "@/validations/schemas/signUpValidation";

export const resetPasswordSchema = z
  .object({
    ...PASSWORD_SIGN_UP_SCHEMA,
    [SIGN_UP_VALIDATION_FIELDS.confirmPassword]: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: CONFIRM_PASSWORD.matching,
    path: [SIGN_UP_VALIDATION_FIELDS.confirmPassword],
  });

export type ResetPasswordFormValuesType = z.infer<typeof resetPasswordSchema>;
