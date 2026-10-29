import {Button} from "@/components/primitives/Button";
import {useFormContext} from "react-hook-form";
import {type ProfileFormValuesType} from "@/validations/schemas/profileValidation";

export const ProfileSettingsHeader = () => {
    const {
        formState: {isSubmitting, isValid, isDirty},
    } = useFormContext<ProfileFormValuesType>();

    return (
        <header className="flex flex-wrap items-center justify-between gap-6">
            <div>
                <h1 className="font-extrabold tracking-tight">Profile Settings</h1>
                <p className="mt-3">
                    Update your personal details and parameters for an accurate daily
                    water intake calculation.
                </p>
            </div>
            <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting || !isValid || !isDirty}>
                Save Changes
            </Button>
        </header>
    );
};
