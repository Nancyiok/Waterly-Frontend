import { FormProvider } from "react-hook-form";
import { useSearchParams } from "react-router";
import { AuthBannerLayout } from "@/components/layout/AuthLayout/AuthBannerLayout";
import { AuthSwitchLink } from "@/components/layout/AuthLayout/AuthSwitchLink";
import { ROUTES_PATH } from "@/routes/routes.constants";
import loginBanner from "@/assets/images/loginBanner.jpg";
import { useValidationMethodsForm } from "@/hooks/useValidationMethodsForm";
import { resetPasswordSchema } from "@/validations/schemas/resetPasswordValidation";
import { ResetPasswordForm } from "@/components/features/ResetPassword";
import { AUTH_TEXTS } from "@/constants/texts/auth";

export const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const methods = useValidationMethodsForm(resetPasswordSchema);

  return (
    <AuthBannerLayout banner={loginBanner} bannerAlt={AUTH_TEXTS.resetPassword.bannerAlt}>
      <div className="p-5 md:p-8 max-w-md mx-auto w-full">
        <h1 className="mb-2 script-title text-3xl md:text-4xl text-center text-primary-dark">
          {AUTH_TEXTS.resetPassword.title}
        </h1>
        <p className="text-center mb-8">
          {token
            ? AUTH_TEXTS.resetPassword.description
            : AUTH_TEXTS.resetPassword.missingTokenDescription}
        </p>

        {token ? (
          <FormProvider {...methods}>
            <ResetPasswordForm token={token} />
          </FormProvider>
        ) : (
          <AuthSwitchLink
            text={AUTH_TEXTS.resetPassword.linkExpiredText}
            linkText={AUTH_TEXTS.resetPassword.requestNewLinkText}
            to={ROUTES_PATH.FORGOT_PASSWORD}
          />
        )}

        <AuthSwitchLink
          text={AUTH_TEXTS.forgotPassword.rememberPasswordText}
          linkText={AUTH_TEXTS.forgotPassword.loginLinkText}
          to={ROUTES_PATH.LOGIN}
        />
      </div>
    </AuthBannerLayout>
  );
};

export default ResetPasswordPage;
