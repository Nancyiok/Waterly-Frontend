import * as z from "zod";
import {
  EMAIL_RULES,
  PASSWORD_RULES,
  PASSWORD_REGEX,
  MIN_PASSWORD_LENGTH,
  CONFIRM_PASSWORD,
  SIGN_UP_VALIDATION_FIELDS,
  MAX_EMAIL_LENGTH,
} from "@/validations/constants/authValidationRules";

export const PASSWORD_SIGN_UP_SCHEMA = {
  [SIGN_UP_VALIDATION_FIELDS.password]: z
    .string()
    .min(MIN_PASSWORD_LENGTH, PASSWORD_RULES.min)
    .regex(PASSWORD_REGEX.lower, PASSWORD_RULES.lower)
    .regex(PASSWORD_REGEX.upper, PASSWORD_RULES.upper)
    .regex(PASSWORD_REGEX.digit, PASSWORD_RULES.digit),
};

export const SIGN_UP_EMAIL_SCHEMA = {
  [SIGN_UP_VALIDATION_FIELDS.email]: z
    .email(EMAIL_RULES.incorrect)
    .min(1, EMAIL_RULES.required)
    .max(MAX_EMAIL_LENGTH, EMAIL_RULES.max),
};

export const signUpSchema = z
  .object({
    ...SIGN_UP_EMAIL_SCHEMA,
    ...PASSWORD_SIGN_UP_SCHEMA,
    [SIGN_UP_VALIDATION_FIELDS.confirmPassword]: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: CONFIRM_PASSWORD.matching,
    path: [SIGN_UP_VALIDATION_FIELDS.confirmPassword],
  });

export type SignUpFormValuesType = z.infer<typeof signUpSchema>;
