import {type ToastVariant, type ToastTheme} from "./types";

export const TOAST_VARIANTS = {
    success: "success",
    error: "error",
    warn: "warn",
    info: "info",
} as const;

export const DEFAULT_TEXT: Record<ToastVariant, { message: string }> = {
    [TOAST_VARIANTS.success]: {
        message: "The action was completed successfully",
    },
    [TOAST_VARIANTS.error]: {
        message: "Something went wrong. Please try again",
    },
    [TOAST_VARIANTS.warn]: {
        message: "Please check the entered data",
    },
    [TOAST_VARIANTS.info]: {
        message: "Time to drink some water",
    },
};

export const THEME: Record<ToastVariant, ToastTheme> = {
    [TOAST_VARIANTS.success]: {
        surface: "bg-success-light border-success/35",
        icon: "lucide:circle-check",
        iconStyle: "text-success",
    },
    [TOAST_VARIANTS.error]: {
        surface: "bg-danger-light border-danger/35",
        icon: "lucide:circle-x",
        iconStyle: "text-danger",
    },
    [TOAST_VARIANTS.warn]: {
        surface: "bg-warning-light border-warning/35",
        icon: "lucide:triangle-alert",
        iconStyle: "text-warning",
    },
    [TOAST_VARIANTS.info]: {
        surface: "bg-primary-foam border-primary/35",
        icon: "lucide:droplet",
        iconStyle: "text-primary",
    },
};
