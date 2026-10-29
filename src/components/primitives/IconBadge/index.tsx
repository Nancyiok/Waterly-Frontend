import { Icon } from "@iconify/react";

type IconBadgeVariant = "white" | "primary" | "danger";

type IconBadgeSize = "sm" | "md" | "lg";

type Props = {
  icon: string;
  variant?: IconBadgeVariant;
  size?: IconBadgeSize;
  className?: string;
};

const variants: Record<IconBadgeVariant, string> = {
  white: "bg-white text-primary",
  primary: "bg-primary-foam text-primary",
  danger: "bg-danger-light text-danger",
};

const sizes: Record<IconBadgeSize, { badge: string; icon: string }> = {
  sm: { badge: "size-8", icon: "size-4" },
  md: { badge: "size-10", icon: "size-5" },
  lg: { badge: "size-11", icon: "size-6" },
};

const badgeLayout = "grid shrink-0 place-items-center rounded-full";

export const IconBadge = ({
  icon,
  variant = "primary",
  size = "md",
  className = "",
}: Props) => (
  <span className={`${badgeLayout} ${sizes[size].badge} ${variants[variant]} ${className}`}>
    <Icon icon={icon} className={sizes[size].icon} />
  </span>
);
