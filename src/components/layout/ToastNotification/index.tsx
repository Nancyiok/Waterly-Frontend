import {Icon} from "@iconify/react";
import {THEME, DEFAULT_TEXT} from "./constants";
import "./index.css";
import {type ToastNotificationProps} from "@/hooks/useToast/types";

const toastLayout = "flex w-full items-center gap-3 py-3 pl-4 pr-10";
const toastSurface = "rounded-lg border";

export function ToastNotification({
                                      header,
                                      message,
                                      variant,
                                  }: ToastNotificationProps) {
    const theme = THEME[variant];
    const defaultText = DEFAULT_TEXT[variant];

    return (
        <div className={`${toastLayout} ${toastSurface} ${theme.surface}`}>
            <Icon icon={theme.icon} className={`size-5 shrink-0 ${theme.iconStyle}`}/>
            <div className="flex min-w-0 flex-col gap-0.5 font-sans">
                {header && (
                    <p className="font-semibold text-neutral-900">{header}</p>
                )}
                <p className={header ? "" : "font-medium text-neutral-900"}>
                    {message || defaultText.message}
                </p>
            </div>
        </div>
    );
}
