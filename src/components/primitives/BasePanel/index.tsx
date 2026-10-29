import { type ReactNode } from "react";

type PanelVariant =
    | "default"
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "sky-gradient";

interface BasePanelProps {
    children: ReactNode;
    className?: string;
    variant?: PanelVariant;
    hoverable?: boolean;
    onClick?: () => void;
}

const variantStyles: Record<PanelVariant, string> = {
    default: "bg-white border-neutral-100 text-neutral-900",
    primary: "bg-primary-foam border-primary-soft text-primary-dark",
    success: "bg-success-light border-success/30 text-neutral-900",
    warning: "bg-warning-light border-warning/30 text-neutral-900",
    danger: "bg-danger-light border-danger/30 text-neutral-900",
    "sky-gradient": "bg-sky-gradient border-0 text-white",
};

const hoverStyles =
    "transition-all duration-200 ease-out hover:shadow-panel-hover hover:-translate-y-0.5";

const clickableStyles =
    "group w-full cursor-pointer active:scale-[0.98] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function BasePanel({
    children,
    className = "",
    variant = "default",
    hoverable = false,
    onClick,
}: BasePanelProps) {
    const panelClassName = `flex flex-col justify-between rounded-lg border p-6 sm:p-8 ${variantStyles[variant]} ${hoverable ? hoverStyles : ""} ${className}`;

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={`${panelClassName} ${clickableStyles}`}
            >
                {children}
            </button>
        );
    }

    return <div className={panelClassName}>{children}</div>;
}
