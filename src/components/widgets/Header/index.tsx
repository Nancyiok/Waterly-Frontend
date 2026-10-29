import {Icon} from "@iconify/react";
import {LogoWidget} from "@/components/widgets/LogoWidget";
import {Button} from "@/components/primitives/Button";
import {getCurrentWeekDay} from "@/utils/getCurrentWeekDay.ts";
import {UserDropdown} from "@/components/widgets/UserDropdown";

interface Props {
    setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarOpen?: boolean;
}

export function Header({setSidebarOpen, sidebarOpen}: Props) {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-neutral-100 bg-white px-4">
            {setSidebarOpen && !sidebarOpen && (
                <Button
                    variant={"outline"}
                    onClick={() => setSidebarOpen((prev) => !prev)}
                    shape={"square"}
                    aria-label="Toggle sidebar"
                >
                    <Icon icon="lucide:menu" width={22} height={22}/>
                </Button>
            )}
            <LogoWidget isLogoShown={false}/>
            <p className="md:block hidden">{getCurrentWeekDay()}</p>
            <div className="ml-auto">
                <UserDropdown/>
            </div>
        </header>
    );
}