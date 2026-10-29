import type { ComponentPropsWithoutRef, ReactNode } from "react";
import CheckIcon from "@/assets/icons/check.svg?react";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: ReactNode;
  className?: string;
} & Omit<
  ComponentPropsWithoutRef<"input">,
  "type" | "checked" | "onChange" | "className"
>;

export const Checkbox = ({
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
  ...inputProps
}: CheckboxProps) => {
  return (
    <label
      className={`inline-flex items-center gap-2 cursor-pointer has-disabled:cursor-not-allowed ${
        disabled ? "opacity-50" : ""
      } ${className}`}
    >
      <span className="relative grid place-items-center">
        <input
          {...inputProps}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
          className="peer size-5 appearance-none disabled:cursor-not-allowed rounded border border-gray-300 checked:border-primary checked:bg-primary"
        />
        <CheckIcon
          className="pointer-events-none absolute size-3.5 text-white opacity-0 peer-checked:opacity-100"
        />
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
