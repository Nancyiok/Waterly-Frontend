import {BasePanel} from "@/components/primitives/BasePanel";
import {FormInputValidation} from "@/validations/FormInputValidation";
import {PROFILE_FIELS_VALIDATION} from "@/validations/constants/profileValidationRules";
import {PROFILE_TEXTS} from "@/constants/texts";

interface PasswordFieldItem {
    name: string;
    type: string;
    label: string;
    placeholder?: string;
    leftIcon?: string;
    className?: string;
}

const PASSWORD_FIELDS: PasswordFieldItem[] = [
    {
        name: PROFILE_FIELS_VALIDATION.currentPassword,
        type: "password",
        label: PROFILE_TEXTS.changePassword.currentPasswordLabel,
        placeholder: PROFILE_TEXTS.changePassword.currentPasswordPlaceholder,
        leftIcon: "mdi:lock-outline",
        className: "sm:col-span-2",
    },
    {
        name: PROFILE_FIELS_VALIDATION.newPassword,
        type: "password",
        label: PROFILE_TEXTS.changePassword.newPasswordLabel,
        placeholder: PROFILE_TEXTS.changePassword.newPasswordPlaceholder,
        leftIcon: "mdi:lock-plus-outline",
    },
    {
        name: PROFILE_FIELS_VALIDATION.repeatNewPassword,
        type: "password",
        label: PROFILE_TEXTS.changePassword.repeatPasswordLabel,
        placeholder: PROFILE_TEXTS.changePassword.repeatPasswordPlaceholder,
        leftIcon: "mdi:lock-check-outline",
    },
];

export const ChangePassword = () => {
    return (
        <BasePanel>
            <h2 className="font-bold">{PROFILE_TEXTS.changePassword.title}</h2>
            <p className="mt-2">
                {PROFILE_TEXTS.changePassword.description}
            </p>
            <div className="mt-10 grid gap-x-5 gap-y-7 sm:grid-cols-2">
                {PASSWORD_FIELDS.map(({ className, ...field }) => (
                    <div key={field.name} className={className}>
                        <FormInputValidation {...field} />
                    </div>
                ))}
            </div>
        </BasePanel>
    );
};

export default ChangePassword;
