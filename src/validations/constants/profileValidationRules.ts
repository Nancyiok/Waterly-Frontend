import {calculateAge} from "@/utils/calculateAge.ts";
import {isValidPhoneNumber} from "libphonenumber-js/max";

export const PROFILE_FIELS_VALIDATION = {
    firstName: "name",
    lastName: "surname",
    email: "email",
    phone: "phone",
    dateOfBirth: "dateOfBirth",
    gender: "gender",
    height: "height",
    weight: "weight",
    waterGoal: "goal",
    currentPassword: "currentPassword",
    newPassword: "newPassword",
    repeatNewPassword: "repeatPassword",
} as const;


export const MIN_PROFILE_PHOTO_SIZE_PX = 100;
export const MAX_PROFILE_PHOTO_SIZE_PX = 1000;
export const PHOTO_MAX_SIZE_MB = 2;
export const MAX_PHOTO_SIZE = PHOTO_MAX_SIZE_MB * 1024 * 1024;
export const VALID_PHOTO_EXTENSIONS = ["jpg", "png", "jpeg", "avif", "webp", "gif"];
export const NAME_REGEX = /^[\p{L}\s'-]+$/u;

export const PROFILE_LIMITS = {
    nameMin: 2,
    nameMax: 50,
    heightMin: 50,
    heightMax: 250,
    weightMin: 20,
    weightMax: 300,
    weightStep: 0.1,
    waterGoalMin: 500,
    waterGoalMax: 10000,
    birthDateMin: new Date("1900-01-01"),
    birthDateMax: new Date(),
    ageMin: 12,
    ageMax: 120,
} as const;

export const PROFILE_VALIDATION_MESSAGES = {
    firstName: {
        min: `First name must be at least ${PROFILE_LIMITS.nameMin} characters`,
        max: "First name is too long",
        format: "Only letters, spaces, apostrophes and hyphens are allowed",
    },
    lastName: {
        min: `Last name must be at least ${PROFILE_LIMITS.nameMin} characters`,
        max: "Last name is too long",
        format: "Only letters, spaces, apostrophes and hyphens are allowed",
    },
    phone: {
        format: "Enter a valid phone number with country code",
    },
    dateOfBirth: {
        min: `Date of birth can't be earlier than ${PROFILE_LIMITS.birthDateMin.getFullYear()}`,
        max: "Date of birth can't be in the future",
        format: "Invalid date",
        ageMin: `You must be at least ${PROFILE_LIMITS.ageMin} years old`,
        ageMax: `Age can't be over ${PROFILE_LIMITS.ageMax}`,
    },
    height: {
        type: "Height must be a number",
        int: "Height must be a whole number",
        min: `Min ${PROFILE_LIMITS.heightMin} cm`,
        max: `Max ${PROFILE_LIMITS.heightMax} cm`,
    },
    weight: {
        type: "Weight must be a number",
        min: `Min ${PROFILE_LIMITS.weightMin} kg`,
        max: `Max ${PROFILE_LIMITS.weightMax} kg`,
        decimals: "Max 1 decimal place",
    },
    waterGoal: {
        type: "Goal must be a number",
        int: "Goal must be a whole number",
        min: `Min ${PROFILE_LIMITS.waterGoalMin} ml`,
        max: `Max ${PROFILE_LIMITS.waterGoalMax} ml`,
    },
} as const;


export const isOldEnough = (date: Date) =>
    calculateAge(date) >= PROFILE_LIMITS.ageMin;

export const isNotTooOld = (date: Date) =>
    calculateAge(date) <= PROFILE_LIMITS.ageMax;

export const isValidPhone = (phone: string) => isValidPhoneNumber(phone);
