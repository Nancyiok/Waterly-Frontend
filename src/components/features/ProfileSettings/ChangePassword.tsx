import {BasePanel} from "@/components/primitives/BasePanel";
import {FormInputValidation} from "@/validations/FormInputValidation";
import {PROFILE_FIELS_VALIDATION} from "@/validations/constants/profileValidationRules";

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
        label: "Current Password",
        placeholder: "Enter current password",
        leftIcon: "mdi:lock-outline",
        className: "sm:col-span-2",
    },
    {
        name: PROFILE_FIELS_VALIDATION.newPassword,
        type: "password",
        label: "New Password",
        placeholder: "At least 8 characters",
        leftIcon: "mdi:lock-plus-outline",
    },
    {
        name: PROFILE_FIELS_VALIDATION.repeatNewPassword,
        type: "password",
        label: "Repeat Password",
        placeholder: "Repeat new password",
        leftIcon: "mdi:lock-check-outline",
    },
];

export const ChangePassword = () => {
    return (
        <BasePanel>
            <h2 className="font-bold">Change Password</h2>
            <p className="mt-2">
                Leave the fields blank if you don't want to change your password.
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
