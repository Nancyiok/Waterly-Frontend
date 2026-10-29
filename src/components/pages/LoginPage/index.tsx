import { AUTH_TEXTS } from "@/constants/texts/auth";
import { logInSchema } from "@/validations/schemas/loginValidation.ts";
import { FormProvider } from "react-hook-form";
import { LoginForm } from "@/components/features/Login";
import { useValidationMethodsForm } from "@/hooks/useValidationMethodsForm.ts";
import loginBanner from "@/assets/images/loginBanner.jpg";
import { AuthBannerLayout } from "@/components/layout/AuthLayout/AuthBannerLayout";
import { AuthSwitchLink } from "@/components/layout/AuthLayout/AuthSwitchLink";
import { GoogleLoginButton } from "@/components/features/GoogleLoginButton";
import { ROUTES_PATH } from "@/routes/routes.constants";
import { OrDivider } from "./OrDivider";

export function LoginPage() {
  const methods = useValidationMethodsForm(logInSchema);

  return (
    <AuthBannerLayout
      banner={loginBanner}
      bannerAlt={AUTH_TEXTS.login.bannerAlt}
    >
      <div className="p-5 md:p-0">
        <h1 className="mb-6 script-title text-3xl md:text-4xl text-center text-primary-dark">
          {AUTH_TEXTS.login.title}
        </h1>
        <FormProvider {...methods}>
          <LoginForm />
        </FormProvider>
        <OrDivider />
        <GoogleLoginButton />
        <AuthSwitchLink
          text={AUTH_TEXTS.login.noAccountText}
          linkText={AUTH_TEXTS.login.signUpLinkText}
          to={ROUTES_PATH.SIGN_UP}
        />
      </div>
    </AuthBannerLayout>
  );
}

export default LoginPage;
