import {Icon} from "@iconify/react";
import {LogoWidget} from "@/components/widgets/LogoWidget";
import {Button} from "@/components/primitives/Button";
import {NAVIGATION_TEXTS} from "@/constants/texts/navigation";

interface Props {
    onCloseSidebar?: () => void;
}

export const SidebarHeader = ({onCloseSidebar}: Props) => {
    return (
        <div className="mb-10 flex items-center justify-between">
            <LogoWidget/>
            {onCloseSidebar && (
                <Button
                    variant={"outline"}
                    onClick={onCloseSidebar}
                    shape={"circle"}
                    aria-label={NAVIGATION_TEXTS.sidebar.closeSidebar}
                >
                    <Icon icon="lucide:x" width={22} height={22}/>
                </Button>
            )}
        </div>
    )
}