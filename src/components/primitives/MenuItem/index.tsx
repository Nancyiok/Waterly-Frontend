import {type ButtonHTMLAttributes, type ReactNode} from "react";
import {Link} from "react-router";
import {Icon} from "@iconify/react";
import classNames from "classnames";

type MenuItemVariant = "default" | "danger";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: string;
    icon?: string;
    variant?: MenuItemVariant;
    children: ReactNode;
};

const variants: Record<MenuItemVariant, string> = {
    default: "text-neutral-900 hover:bg-neutral-50",
    danger: "text-danger hover:bg-danger/5",
};

const baseMenuItemClass = classNames(
    "flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 font-medium",
    "text-left cursor-pointer transition-colors duration-200",
);

export const MenuItem = ({
                             to,
                             icon,
                             variant = "default",
                             className = "",
                             children,
                             ...props
                         }: Props) => {
    const menuItemClass = classNames(
        baseMenuItemClass,
        variants[variant],
        className,
    );

    const itemContent = (
        <>
            {icon && <Icon icon={icon} className="size-4"/>}
            {children}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={menuItemClass}>
                {itemContent}
            </Link>
        );
    }

    return (
        <button type="button" className={menuItemClass} {...props}>
            {itemContent}
        </button>
    );
};
