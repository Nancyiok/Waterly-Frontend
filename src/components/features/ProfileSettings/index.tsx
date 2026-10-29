import {FormProvider} from "react-hook-form";
import {useValidationMethodsForm} from "@/hooks/useValidationMethodsForm";
import {profileSchema} from "@/validations/schemas/profileValidation";
import {Form} from "@/components/primitives/Form";
import {ProfileSettingsHeader} from "@/components/features/ProfileSettings/ProfileSettingsHeader";
import {PersonalDetails} from "@/components/features/ProfileSettings/PersonalDetails";
import {BodyParameters} from "@/components/features/ProfileSettings/BodyParameters";
import {type ProfileFormValuesType} from "@/validations/schemas/profileValidation";
import {useUserProfileInfo} from "@/store/useUserProfileInfo";
import {useEffect} from "react";
import {pick} from "lodash";
import {updateUserProfile} from "@/services/user/user.profile.service.ts";
import { formatDate } from "@/utils/formatDate";
import { DATE_FORMATS } from "@/constants/dateFormats";
import {successToast} from "@/hooks/useToast/useToast";
import {PROFILE_TEXTS} from "@/constants/texts/profile";

export function ProfileSettings() {
    const methods = useValidationMethodsForm(profileSchema);

    const handleSave = async (data: ProfileFormValuesType) => {
        await updateUserProfile(pick(data, Object.keys(methods.formState.dirtyFields)));
        methods.reset(methods.getValues());
        successToast({message: PROFILE_TEXTS.toasts.saved});
    };

    const profile = useUserProfileInfo((state) => state.user);

    useEffect(() => {
        if (!profile) return;
        methods.reset({
            ...profile,
            phone: profile.phone ?? undefined,
            weight: profile.weight ?? undefined,
            dateOfBirth: profile.dateOfBirth ? formatDate(profile.dateOfBirth, DATE_FORMATS.isoDate) : undefined,
        });
    }, [profile, methods]);

    return (
        <FormProvider {...methods}>
            <Form onSubmit={handleSave}>
                <ProfileSettingsHeader/>
                <div className="mt-14 space-y-7">
                    <PersonalDetails/>
                    <BodyParameters/>
                </div>
            </Form>
        </FormProvider>
    );
}
