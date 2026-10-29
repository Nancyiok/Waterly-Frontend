import { Icon } from "@iconify/react";
import { NavLink } from "react-router";
import classNames from "classnames";
import { NAVIGATION_TEXTS } from "@/constants/texts/navigation";

type NavItem = {
  path: string;
  label: string;
  icon: string;
};

type Props = {
  onCloseSidebar?: () => void;
  isMobile: boolean;
};

const SIDEBAR_NAV_ITEMS: NavItem[] = [
  {
    path: "/",
    label: NAVIGATION_TEXTS.sidebar.items.home,
    icon: "lucide:layout-dashboard",
  },
  {
    path: "/statistics",
    label: NAVIGATION_TEXTS.sidebar.items.statistics,
    icon: "lucide:trending-up",
  },
  {
    path: "/history",
    label: NAVIGATION_TEXTS.sidebar.items.history,
    icon: "lucide:calendar-days",
  },
  {
    path: "/settings",
    label: NAVIGATION_TEXTS.sidebar.items.settings,
    icon: "lucide:settings",
  },
];

const navBase =
  "flex h-11 w-full items-center gap-3 rounded-lg px-4 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const navActive = "bg-primary-foam text-primary-dark";
const navInactive = "hover:bg-neutral-50 hover:text-neutral-800";

export const SidebarNav = ({ onCloseSidebar, isMobile }: Props) => {
  return (
    <nav className="flex flex-col gap-4">
      {SIDEBAR_NAV_ITEMS.map(({ path, label, icon }) => (
        <NavLink
          key={path}
          to={path}
          onClick={isMobile ? onCloseSidebar : undefined}
          className={({ isActive }) =>
            classNames(navBase, isActive ? navActive : navInactive)
          }
        >
          <Icon icon={icon} width={22} height={22} />
          <span className="flex-1">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};
