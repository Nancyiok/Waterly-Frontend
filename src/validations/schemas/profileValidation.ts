import * as z from "zod";
import {
    PROFILE_FIELS_VALIDATION,
    PROFILE_LIMITS,
    PROFILE_VALIDATION_MESSAGES as MESSAGES,
    NAME_REGEX,
    isValidPhone,
    isOldEnough,
    isNotTooOld,
} from "@/validations/constants/profileValidationRules";
import {GENDER} from "@/types/user";
import {formatDate} from "@/utils/formatDate";
import {DATE_FORMATS} from "@/constants/dateFormats";

export const profileSchema = z
    .object({
        [PROFILE_FIELS_VALIDATION.firstName]: z
            .string()
            .trim()
            .min(PROFILE_LIMITS.nameMin, MESSAGES.firstName.min)
            .max(PROFILE_LIMITS.nameMax, MESSAGES.firstName.max)
            .regex(NAME_REGEX, MESSAGES.firstName.format),
        [PROFILE_FIELS_VALIDATION.lastName]: z
            .string()
            .trim()
            .min(PROFILE_LIMITS.nameMin, MESSAGES.lastName.min)
            .max(PROFILE_LIMITS.nameMax, MESSAGES.lastName.max)
            .regex(NAME_REGEX, MESSAGES.lastName.format),
        [PROFILE_FIELS_VALIDATION.email]: z.string()
            .optional(),
        [PROFILE_FIELS_VALIDATION.phone]: z
            .string()
            .trim()
            .refine(isValidPhone, MESSAGES.phone.format)
            .optional(),
        [PROFILE_FIELS_VALIDATION.dateOfBirth]: z.coerce
            .date()
            .min(PROFILE_LIMITS.birthDateMin, MESSAGES.dateOfBirth.min)
            .max(PROFILE_LIMITS.birthDateMax, MESSAGES.dateOfBirth.max)
            .refine(isOldEnough, MESSAGES.dateOfBirth.ageMin)
            .refine(isNotTooOld, MESSAGES.dateOfBirth.ageMax)
            .transform((date) => formatDate(date, DATE_FORMATS.isoDate))
            .optional(),
        [PROFILE_FIELS_VALIDATION.gender]:
            z.enum(GENDER).default(GENDER.unspecified),
        [PROFILE_FIELS_VALIDATION.height]: z.coerce
            .number(MESSAGES.height.type)
            .int(MESSAGES.height.int)
            .min(PROFILE_LIMITS.heightMin, MESSAGES.height.min)
            .max(PROFILE_LIMITS.heightMax, MESSAGES.height.max)
            .optional(),
        [PROFILE_FIELS_VALIDATION.weight]: z.coerce
            .number(MESSAGES.weight.type)
            .min(PROFILE_LIMITS.weightMin, MESSAGES.weight.min)
            .max(PROFILE_LIMITS.weightMax, MESSAGES.weight.max)
            .multipleOf(PROFILE_LIMITS.weightStep, MESSAGES.weight.decimals)
            .optional(),
    })
;

export type ProfileFormValuesType = z.infer<typeof profileSchema>;
