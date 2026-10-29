import { useState, type ReactNode } from "react";
import { Icon } from "@iconify/react";

interface DropdownProps {
    trigger: ReactNode;
    children: ReactNode;
    align?: "left" | "right";
    className?: string;
    triggerClassName?: string;
}

export function Dropdown({
    trigger,
    children,
    align = "right",
    className = "",
    triggerClassName = "",
}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`relative ${className}`}>
            <div
                onClick={() => setIsOpen((open) => !open)}
                className={`flex cursor-pointer items-center gap-2 rounded-xl p-1.5 transition-colors hover:bg-neutral-50 select-none ${triggerClassName}`}
            >
                {trigger}
                <Icon
                    icon="lucide:chevron-down"
                    className={`size-4 text-neutral-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </div>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute top-full mt-2 md:min-w-54 min-w-50 rounded-xl border border-neutral-100 bg-white p-2 shadow-xl z-50 ${
                        align === "right" ? "right-0" : "left-0"
                    }`}
                >
                    {children}
                </div>
            )}
        </div>
    );
}