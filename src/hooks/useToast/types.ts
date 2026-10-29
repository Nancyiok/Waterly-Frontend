export const TOAST_VARIANTS = {
  success: "success",
  error: "error",
  warn: "warn",
  info: "info",
} as const;

export type ToastVariant = (typeof TOAST_VARIANTS)[keyof typeof TOAST_VARIANTS];

export type ToastNotificationProps = {
  header?: string;
  message: string;
  variant: keyof typeof TOAST_VARIANTS;
};