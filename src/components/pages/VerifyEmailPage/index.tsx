import { useSearchParams } from "react-router";
import { Icon } from "@iconify/react";
import { AuthBannerLayout } from "@/components/layout/AuthLayout/AuthBannerLayout";
import { Link } from "@/components/primitives/Link";
import { Button } from "@/components/primitives/Button";
import { AUTH_TEXTS } from "@/constants/texts/auth";
import { ROUTES_PATH } from "@/routes/routes.constants";
import { useVerifyEmail } from "@/hooks/useVerifyEmail";
import loginBanner from "@/assets/images/loginBanner.jpg";

export const VerifyEmailPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { status, error, isFetching, refetch } = useVerifyEmail(token);
  const verificationStatus = !token ? "error" : isFetching ? "pending" : status;
  const errorMessage = token
    ? error?.message
    : AUTH_TEXTS.verifyEmail.missingTokenDescription;

  const content = {
    pending: {
      icon: "svg-spinners:180-ring",
      iconClass: "text-primary",
      descriptionClass: "",
      title: AUTH_TEXTS.verifyEmail.pendingTitle,
      description: AUTH_TEXTS.verifyEmail.pendingDescription,
    },
    success: {
      icon: "lucide:circle-check",
      iconClass: "text-success",
      descriptionClass: "",
      title: AUTH_TEXTS.verifyEmail.successTitle,
      description: AUTH_TEXTS.verifyEmail.successDescription,
    },
    error: {
      icon: "lucide:circle-alert",
      iconClass: "text-danger",
      descriptionClass: "text-danger",
      title: AUTH_TEXTS.verifyEmail.errorTitle,
      description: errorMessage ?? AUTH_TEXTS.verifyEmail.errorDescription,
    },
  }[verificationStatus];

  return (
    <AuthBannerLayout
      banner={loginBanner}
      bannerAlt={AUTH_TEXTS.verifyEmail.bannerAlt}
    >
      <div className="p-5 md:p-8 max-w-md mx-auto w-full flex flex-col items-center text-center">
        <Icon
          icon={content.icon}
          className={`size-12 mb-4 ${content.iconClass}`}
        />

        <h1 className="mb-2 script-title text-3xl md:text-4xl text-primary-dark">
          {content.title}
        </h1>

        <p className={`mb-8 ${content.descriptionClass}`}>
          {content.description}
        </p>

        {verificationStatus === "success" && (
          <Link to={ROUTES_PATH.HOME} variant="button" size="md">
            {AUTH_TEXTS.verifyEmail.successButton}
          </Link>
        )}

        {verificationStatus === "error" && (
          <div className="flex items-center gap-3">
            {token && (
              <Button onClick={() => refetch()}>
                {AUTH_TEXTS.verifyEmail.retryButton}
              </Button>
            )}
            <Link to={ROUTES_PATH.LOGIN} variant="primary" size="sm">
              {AUTH_TEXTS.verifyEmail.errorButton}
            </Link>
          </div>
        )}
      </div>
    </AuthBannerLayout>
  );
};

export default VerifyEmailPage;
