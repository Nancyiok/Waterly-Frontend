import { GoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import { loginViaGoogle } from "@/services/auth/auth.service";
import { errorToast, successToast } from "@/hooks/useToast/useToast";
import { AUTH_TEXTS } from "@/constants/texts";

export const GoogleLoginButton = () => {
  const { mutate } = useMutation({
    mutationFn: loginViaGoogle,
    onSuccess: () =>
      successToast({ message: AUTH_TEXTS.login.successMessage }),
  });

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential) {
          mutate({ token: credentialResponse.credential });
        }
      }}
      onError={() => errorToast({ message: AUTH_TEXTS.google.errorMessage })}
      logo_alignment="center"
      text="continue_with"
    />
  );
};
