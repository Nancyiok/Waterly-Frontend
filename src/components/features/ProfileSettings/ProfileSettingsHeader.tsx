import {Button} from "@/components/primitives/Button";
import {useFormContext} from "react-hook-form";
import {type ProfileFormValuesType} from "@/validations/schemas/profileValidation";
import {PROFILE_TEXTS} from "@/constants/texts";

export const ProfileSettingsHeader = () => {
    const {
        formState: {isSubmitting, isValid, isDirty},
    } = useFormContext<ProfileFormValuesType>();

    return (
        <header className="flex flex-wrap items-center justify-between gap-6">
            <div>
                <h1 className="font-extrabold tracking-tight">{PROFILE_TEXTS.header.title}</h1>
                <p className="mt-3">
                    {PROFILE_TEXTS.header.description}
                </p>
            </div>
            <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting || !isValid || !isDirty}>
                {PROFILE_TEXTS.header.saveButton}
            </Button>
        </header>
    );
};
