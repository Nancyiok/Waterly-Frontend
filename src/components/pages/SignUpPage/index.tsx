import {AUTH_TEXTS} from "@/constants/texts/auth";
import {signUpSchema} from "@/validations/schemas/signUpValidation";
import {FormProvider} from "react-hook-form";
import {SignUpForm} from "@/components/features/SignUp";
import {useValidationMethodsForm} from "@/hooks/useValidationMethodsForm.ts";
import SignUpBanner from "@/assets/images/signUpBanner.jpg";
import {AuthBannerLayout} from "@/components/layout/AuthLayout/AuthBannerLayout";
import {AuthSwitchLink} from "@/components/layout/AuthLayout/AuthSwitchLink";
import {ROUTES_PATH} from "@/routes/routes.constants";

export function SignUpPage() {
    const methods = useValidationMethodsForm(signUpSchema);

    return (
        <AuthBannerLayout banner={SignUpBanner} bannerAlt={AUTH_TEXTS.signUp.bannerAlt}>
                <div className='p-5 md:p-0'>
                    <h1 className='mb-6 script-title text-3xl md:text-4xl text-center text-primary-dark'>
                        {AUTH_TEXTS.signUp.title}
                    </h1>
                    <FormProvider {...methods}>
                        <SignUpForm/>
                    </FormProvider>
                    <AuthSwitchLink
                        text={AUTH_TEXTS.signUp.hasAccountText}
                        linkText={AUTH_TEXTS.signUp.loginLinkText}
                        to={ROUTES_PATH.LOGIN}
                    />
                </div>
        </AuthBannerLayout>
    );
}
