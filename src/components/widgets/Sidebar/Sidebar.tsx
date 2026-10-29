import {SidebarHeader} from "@/components/widgets/Sidebar/SidebarHeader.tsx";
import {SidebarNav} from "@/components/widgets/Sidebar/SidebarNav.tsx";
import classNames from "classnames";
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {useLockBodyScroll} from "@/hooks/useLockBodyScroll";

type SidebarProps = {
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
    defaultActive?: string;
};

const layoutSidebar = "fixed left-0 top-0 z-40 md:sticky md:z-auto h-dvh shrink-0 flex flex-col overflow-hidden whitespace-nowrap";
const appearanceSidebar = "border-r border-neutral-100 bg-white";
const typographySidebar = "font-sans text-neutral-900";
const animationSidebar = "transition-all duration-300 ease-in-out";

export const MOBILE_SIDEBAR_QUERY = "(max-width: 767px)";

const baseSidebarStyles = classNames(layoutSidebar, appearanceSidebar, typographySidebar, animationSidebar);
const sidebarisOpenStyles = "w-72 max-w-[85vw] px-5 pb-6 pt-7 opacity-100";
const sidebarClosedStyles = "w-0 p-0 opacity-0 border-none";

export function Sidebar({
                            isOpen = true,
                            onClose,
                            className = "",
                        }: SidebarProps) {
    const isMobile = useMediaQuery(MOBILE_SIDEBAR_QUERY);
    useLockBodyScroll(isOpen && isMobile);

    return (
        <aside
            className={classNames(baseSidebarStyles, {
                [sidebarisOpenStyles]: isOpen,
                [sidebarClosedStyles]: !isOpen,
            }, className)}
        >
            <SidebarHeader onCloseSidebar={onClose}/>
            <SidebarNav onCloseSidebar={onClose} isMobile={isMobile}/>
        </aside>
    );
}
