import {type AnchorHTMLAttributes, type ReactNode} from "react";
import {Link as RouterLink, type LinkProps as RouterLinkProps} from "react-router";
import {Icon} from "@iconify/react";
import classNames from "classnames";

type LinkVariant = "primary" | "muted" | "button";

type LinkSize = "sm" | "md";

type BaseLinkProps = {
    variant?: LinkVariant;
    size?: LinkSize;
    leftIcon?: string;
    rightIcon?: string;
    className?: string;
    children?: ReactNode;
};

type InternalLinkProps = BaseLinkProps &
    RouterLinkProps & {
        to: RouterLinkProps["to"];
        href?: never;
    };

type ExternalLinkProps = BaseLinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
        to?: never;
    };

export type LinkProps = InternalLinkProps | ExternalLinkProps;

const variants: Record<LinkVariant, string> = {
    primary: "text-primary hover:text-primary-dark underline-offset-4 hover:underline",
    muted: "text-neutral-500 hover:text-neutral-900 underline-offset-4 hover:underline",
    button:
        "inline-flex items-center justify-center rounded-sm bg-primary text-white font-medium hover:bg-primary-light no-underline active:scale-95 transition-all shadow-sm",
};

const sizes: Record<LinkSize, string> = {
    sm: "text-sm",
    md: "text-base",
};

const buttonSizes: Record<LinkSize, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
};

const iconSizes: Record<LinkSize, number> = {
    sm: 16,
    md: 18,
};

const baseLinkClass = classNames(
    "inline-flex items-center gap-1.5 font-medium",
    "transition-colors duration-200 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
);

export const Link = ({
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    className = "",
    children,
    ...restProps
}: LinkProps) => {
    const isButton = variant === "button";
    const sizeClass = isButton ? buttonSizes[size] : sizes[size];
    const computedClassName = classNames(
        baseLinkClass,
        sizeClass,
        variants[variant],
        className,
    );

    const content = (
        <>
            {leftIcon && <Icon icon={leftIcon} width={iconSizes[size]} height={iconSizes[size]} />}
            {children}
            {rightIcon && <Icon icon={rightIcon} width={iconSizes[size]} height={iconSizes[size]} />}
        </>
    );

    if ("to" in restProps && restProps.to !== undefined) {
        return (
            <RouterLink className={computedClassName} {...(restProps as RouterLinkProps)}>
                {content}
            </RouterLink>
        );
    }

    return (
        <a className={computedClassName} {...(restProps as AnchorHTMLAttributes<HTMLAnchorElement>)}>
            {content}
        </a>
    );
};

export default Link;
