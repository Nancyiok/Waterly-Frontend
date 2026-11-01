import {BasePanel} from "@/components/primitives/BasePanel";
import {FormInputValidation} from "@/validations/FormInputValidation";
import {GenderSelector} from "@/components/features/ProfileSettings/PersonalDetails/GenderSelector";
import {ProfileAvatar} from "@/components/features/ProfileSettings/ProfileAvatar";
import {PROFILE_FIELS_VALIDATION} from "@/validations/constants/profileValidationRules";
import {PROFILE_TEXTS} from "@/constants/texts";

interface FormFieldItem {
    name: string;
    type: string;
    label: string;
    placeholder?: string;
    leftIcon?: string;
    disabled?: boolean;
    isOptional?: boolean;
}

const PERSONAL_DETAILS_FIELDS: FormFieldItem[] = [
    {
        name: PROFILE_FIELS_VALIDATION.firstName,
        type: "text",
        label: PROFILE_TEXTS.personalDetails.firstNameLabel,
        placeholder: PROFILE_TEXTS.personalDetails.firstNamePlaceholder,
    },
    {
        name: PROFILE_FIELS_VALIDATION.lastName,
        type: "text",
        label: PROFILE_TEXTS.personalDetails.lastNameLabel,
        placeholder: PROFILE_TEXTS.personalDetails.lastNamePlaceholder,
    },
    {
        name: "email",
        type: "email",
        label: PROFILE_TEXTS.personalDetails.emailLabel,
        leftIcon: "mdi:email-outline",
        disabled: true,
    },
    {
        name: "phone",
        type: "tel",
        label: PROFILE_TEXTS.personalDetails.phoneLabel,
        leftIcon: "mdi:phone-outline",
        isOptional: true,
    },
    {
        name: PROFILE_FIELS_VALIDATION.dateOfBirth,
        type: "date",
        label: PROFILE_TEXTS.personalDetails.dateOfBirthLabel,
        leftIcon: "mdi:calendar-outline",
        isOptional: true,
    },
];

export const PersonalDetails = () => {
    return (
        <BasePanel>
            <h2 className="font-bold">{PROFILE_TEXTS.personalDetails.title}</h2>
            <p className="mt-2">
                {PROFILE_TEXTS.personalDetails.description}
            </p>

            <div className="mt-8 border-b border-neutral-100 pb-8">
                <ProfileAvatar/>
            </div>

            <div className="mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2">
                {PERSONAL_DETAILS_FIELDS.map((field) => (
                    <FormInputValidation key={field.name} {...field} />
                ))}
                <GenderSelector/>
            </div>
        </BasePanel>
    );
};
