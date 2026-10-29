import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { AuthBannerLayout } from "@/components/layout/AuthLayout/AuthBannerLayout";
import { AuthSwitchLink } from "@/components/layout/AuthLayout/AuthSwitchLink";
import { Link } from "@/components/primitives/Link";
import { BasePanel } from "@/components/primitives/BasePanel";
import { ROUTES_PATH } from "@/routes/routes.constants";
import loginBanner from "@/assets/images/loginBanner.jpg";
import { useValidationMethodsForm } from "@/hooks/useValidationMethodsForm";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValuesType,
} from "@/validations/schemas/forgotPasswordValidation";
import { ForgotPasswordForm } from "@/components/features/ForgotPassword";
import { AUTH_TEXTS } from "@/constants/texts/auth";

export const ForgotPasswordPage = () => {
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const methods =
    useValidationMethodsForm<ForgotPasswordFormValuesType>(
      forgotPasswordSchema,
    );

  return (
    <AuthBannerLayout
      banner={loginBanner}
      bannerAlt={AUTH_TEXTS.forgotPassword.bannerAlt}
    >
      <div className="p-5 md:p-8 max-w-md mx-auto w-full">
        <h1 className="mb-2 script-title text-3xl md:text-4xl text-center text-primary-dark">
          {AUTH_TEXTS.forgotPassword.title}
        </h1>
        <p className="text-center mb-8">
          {submittedEmail
            ? AUTH_TEXTS.forgotPassword.sentDescription
            : AUTH_TEXTS.forgotPassword.description}
        </p>

        {submittedEmail ? (
          <div className="flex flex-col items-center gap-4 text-center">
            <BasePanel variant="success">
              <p>
                {AUTH_TEXTS.forgotPassword.sentMessagePrefix}{" "}
                <span className="font-semibold">{submittedEmail}</span>.
              </p>
            </BasePanel>

            <Link
              to={ROUTES_PATH.LOGIN}
              variant="primary"
              size="md"
              className="mt-4"
            >
              {AUTH_TEXTS.forgotPassword.backToLoginLinkText}
            </Link>
          </div>
        ) : (
          <>
            <FormProvider {...methods}>
              <ForgotPasswordForm
                onSuccess={(email) => setSubmittedEmail(email)}
              />
            </FormProvider>

            <AuthSwitchLink
              text={AUTH_TEXTS.forgotPassword.rememberPasswordText}
              linkText={AUTH_TEXTS.forgotPassword.loginLinkText}
              to={ROUTES_PATH.LOGIN}
            />
          </>
        )}
      </div>
    </AuthBannerLayout>
  );
};

export default ForgotPasswordPage;
