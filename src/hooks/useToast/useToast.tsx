import {toast} from "react-toastify";
import {TOAST_VARIANTS, type ToastNotificationProps} from "./types";
import {ToastNotification} from "@/components/layout/ToastNotification";

const notify = ({
                    header = "",
                    message = "",
                    variant = TOAST_VARIANTS.warn,
                }: ToastNotificationProps) => {
    toast(<ToastNotification header={header} message={message} variant={variant}/>);
};

const successToast = ({header = "", message = ""}) =>
    notify({header, message, variant: TOAST_VARIANTS.success});

const errorToast = ({header = "", message = ""}) =>
    notify({header, message, variant: TOAST_VARIANTS.error});

const warnToast = ({header = "", message = ""}) =>
    notify({header, message, variant: TOAST_VARIANTS.warn});

const infoToast = ({header = "", message = ""}) =>
    notify({header, message, variant: TOAST_VARIANTS.info});

export {successToast, errorToast, warnToast, infoToast};