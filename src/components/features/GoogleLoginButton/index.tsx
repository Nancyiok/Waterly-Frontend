import { GoogleLogin } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import { loginViaGoogle } from "@/services/auth/auth.service";
import { errorToast, successToast } from "@/hooks/useToast/useToast";

export const GoogleLoginButton = () => {
  const { mutate } = useMutation({
    mutationFn: loginViaGoogle,
    onSuccess: () =>
      successToast({ message: "You have logged in successfully!" }),
  });

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        if (credentialResponse.credential) {
          mutate({ token: credentialResponse.credential });
        }
      }}
      onError={() => errorToast({ message: "Google login failed" })}
      logo_alignment="center"
      text="continue_with"
    />
  );
};
