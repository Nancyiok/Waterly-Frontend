import { useFormContext } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { Form } from "@/components/primitives/Form";
import { Button } from "@/components/primitives/Button";
import FormInputValidation from "@/validations/FormInputValidation";
import { SIGN_UP_VALIDATION_FIELDS } from "@/validations/constants/authValidationRules";
import { type ResetPasswordFormValuesType } from "@/validations/schemas/resetPasswordValidation";
import { successToast } from "@/hooks/useToast/useToast";
import { resetPasswordUsingToken } from "@/services/auth/auth.service";
import { ROUTES_PATH } from "@/routes/routes.constants";
import { AUTH_TEXTS } from "@/constants/texts/auth";

type Props = {
  token: string;
};

export const ResetPasswordForm = ({ token }: Props) => {
  const navigate = useNavigate();
  const {
    formState: { isValid },
    setError,
  } = useFormContext<ResetPasswordFormValuesType>();

  const { mutate, isPending } = useMutation({
    mutationFn: resetPasswordUsingToken,
    onSuccess: () => {
      successToast({ message: AUTH_TEXTS.resetPassword.successMessage });
      navigate(ROUTES_PATH.HOME);
    },
    onError: (err) => setError("root", { message: err.message }),
  });

  const submitForm = ({ password }: ResetPasswordFormValuesType) =>
    mutate({ token, password });

  return (
    <Form onSubmit={submitForm} className="flex flex-col gap-6">
      <FormInputValidation
        name={SIGN_UP_VALIDATION_FIELDS.password}
        type="password"
        label={AUTH_TEXTS.resetPassword.passwordLabel}
        leftIcon="mdi:lock-outline"
      />
      <FormInputValidation
        name={SIGN_UP_VALIDATION_FIELDS.confirmPassword}
        type="password"
        label={AUTH_TEXTS.resetPassword.confirmPasswordLabel}
        leftIcon="mdi:lock-check-outline"
      />

      <Button
        type="submit"
        disabled={!isValid || isPending}
        isLoading={isPending}
        className="mt-2"
      >
        {isPending
          ? AUTH_TEXTS.resetPassword.submittingButton
          : AUTH_TEXTS.resetPassword.submitButton}
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;
