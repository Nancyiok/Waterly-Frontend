import {Icon} from "@iconify/react";
import {type CloseButtonProps} from "react-toastify";
import {TOAST_DEFAULT_TEXTS} from "@/constants/texts";

const closeButtonPosition = "absolute top-1/2 right-3 z-10 -translate-y-1/2";
const closeButtonShape = "grid size-6 place-items-center rounded-full";
const closeButtonColors = "text-neutral-900";
const closeButtonInteraction =
    "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export function ToastCloseButton({closeToast}: CloseButtonProps) {
    return (
        <button
            type="button"
            aria-label={TOAST_DEFAULT_TEXTS.closeButton}
            onClick={closeToast}
            className={`${closeButtonPosition} ${closeButtonShape} ${closeButtonColors} ${closeButtonInteraction}`}
        >
            <Icon icon="lucide:x" className="size-4"/>
        </button>
    );
}
