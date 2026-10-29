import {useState} from "react";
import classNames from "classnames";
import {Icon} from "@iconify/react";
import {
    type UseFormRegister,
    type RegisterOptions,
    type FieldValues,
    type FieldError,
    type FieldErrorsImpl,
    type Merge,
} from "react-hook-form";

type Props = {
    name: string;
    label?: string | null;
    type?: string;
    rightIcon?: string;
    leftIcon?: string;
    fieldError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    disabled?: boolean;
    registerFunc: UseFormRegister<FieldValues> | null;
    registerOptions?: RegisterOptions;
};

const baseInputSpacing = "w-full";
const baseInputBorder = "border rounded-sm";
const baseInputStates = classNames(
    "text-neutral-900 placeholder:text-neutral-500",
    "disabled:bg-neutral-100 disabled:cursor-not-allowed",
    "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
);
const baseInputStyles = classNames(
    baseInputSpacing,
    baseInputBorder,
    baseInputStates,
);

const inputSize = "h-11 px-4 py-2.5 text-base";
const iconSize = "text-lg";
const leftIconPosition = "left-3.5";
const rightIconPosition = "right-3.5";
const leftIconPadding = "pl-10";
const rightIconPadding = "pr-10";

const dateInputStyles = classNames(
    "[&::-webkit-calendar-picker-indicator]:absolute",
    "[&::-webkit-calendar-picker-indicator]:inset-0",
    "[&::-webkit-calendar-picker-indicator]:w-full",
    "[&::-webkit-calendar-picker-indicator]:h-full",
    "[&::-webkit-calendar-picker-indicator]:opacity-0",
    "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
);

const defaultBorder = "border-neutral-300";
const incorrectBorder = "border-danger focus:ring-danger focus:border-transparent";
const errorLabel = "text-danger";

export const Input = ({
                          name,
                          label = null,
                          type = "text",
                          rightIcon,
                          leftIcon,
                          fieldError,
                          registerFunc = null,
                          registerOptions,
                          disabled = false,
                      }: Props) => {
    const isPassword = type === "password";
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const resolvedType = isPassword
        ? isPasswordVisible
            ? "text"
            : "password"
        : type;

    const hasRightSlot = isPassword || Boolean(rightIcon);

    return (
        <div className="relative">
            {label && (
                <label
                    htmlFor={`${name}Input`}
                    className={classNames("font-medium mt-2", {
                        [errorLabel]: fieldError,
                    })}
                >
                    {label}
                </label>
            )}
            <div className="relative">
                {leftIcon && (
                    <Icon
                        icon={leftIcon}
                        className={classNames(
                            "absolute top-1/2 -translate-y-1/2 text-neutral-500",
                            leftIconPosition,
                            iconSize,
                        )}
                    />
                )}
                <input
                    type={resolvedType}
                    className={classNames(
                        baseInputStyles,
                        inputSize,
                        type === "date" && dateInputStyles,
                        leftIcon && leftIconPadding,
                        hasRightSlot && rightIconPadding,
                        {
                            [incorrectBorder]: fieldError,
                            [defaultBorder]: !fieldError,
                        },
                    )}
                    id={`${name}Input`}
                    disabled={disabled}
                    {...(registerFunc ? registerFunc(name, registerOptions) : {})}
                />
                {isPassword ? (
                    <button
                        type="button"
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
                        className={classNames(
                            "absolute top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900",
                            rightIconPosition,
                            iconSize,
                        )}
                        tabIndex={-1}
                        aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                    >
                        <Icon icon={isPasswordVisible ? "mdi:eye-off" : "mdi:eye"}/>
                    </button>
                ) : (
                    rightIcon && (
                        <Icon
                            icon={rightIcon}
                            className={classNames(
                                "absolute top-1/2 -translate-y-1/2 text-neutral-500",
                                rightIconPosition,
                                iconSize,
                            )}
                        />
                    )
                )}
            </div>
            {fieldError && (
                <p className="absolute top-full left-0 mt-1 text-sm text-danger whitespace-nowrap">
                    {fieldError.message as string}
                </p>
            )}
        </div>
    );
};