import { type ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import { Spinner } from "@/components/primitives/Spinner";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger" | "white";

type ButtonSize = "sm" | "md" | "lg";

type ButtonShape = "default" | "pill" | "square" | "circle";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: ButtonSize;
  shape?: ButtonShape;
  isLoading?: boolean;
};

const variants: Record<Variant, string> = {
  primary: "bg-primary hover:enabled:bg-primary-light text-white",
  secondary: "border border-primary text-primary hover:enabled:bg-primary-foam",
  outline:
    "border border-neutral-300 text-neutral-700 hover:enabled:bg-neutral-50 hover:enabled:border-neutral-400",
  ghost: "text-neutral-500 hover:enabled:bg-neutral-200",
  danger: "bg-danger hover:enabled:brightness-95 text-white",
  white: "bg-white text-primary-dark shadow-sm hover:enabled:bg-primary-foam",
};

const shapes: Record<ButtonShape, string> = {
  default: "rounded-sm",
  pill: "rounded-full",
  square: "rounded-sm",
  circle: "rounded-full",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const equalSideSizes: Record<ButtonSize, string> = {
  sm: "size-8 text-sm",
  md: "size-10 text-base",
  lg: "size-12 text-lg",
};

const buttonTypography = "font-medium";
const buttonTransition = "transition-all duration-200 ease-out";
const buttonDisabledState = "disabled:opacity-50 disabled:cursor-not-allowed";
const buttonInteraction =
  "cursor-pointer active:enabled:scale-95 active:enabled:brightness-90 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

const baseButtonClass = classNames(
  buttonTypography,
  buttonTransition,
  buttonDisabledState,
  buttonInteraction,
  "inline-flex items-center justify-center gap-2",
);

export const Button = ({
  className = "",
  variant = "primary",
  size = "md",
  shape = "default",
  disabled,
  isLoading = false,
  children,
  ...props
}: Props) => {
  const isEqualSide = shape === "square" || shape === "circle";
  const sizeClass = isEqualSide ? equalSideSizes[size] : sizes[size];

  return (
    <button
      className={classNames(
        baseButtonClass,
        sizeClass,
        shapes[shape],
        variants[variant],
        className,
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <Spinner className="size-[1em]" />
      )}
      {!(isLoading && isEqualSide) && children}
    </button>
  );
};
