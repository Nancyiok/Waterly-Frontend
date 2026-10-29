import { useFormContext } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Form } from "@/components/primitives/Form";
import { Button } from "@/components/primitives/Button";
import FormInputValidation from "@/validations/FormInputValidation";
import { LOGIN_FIELS_VALIDATION } from "@/validations/constants/authValidationRules";
import { type ForgotPasswordFormValuesType } from "@/validations/schemas/forgotPasswordValidation";
import { successToast } from "@/hooks/useToast/useToast";
import { requestPasswordResetLink } from "@/services/auth/auth.service";
import { AUTH_TEXTS } from "@/constants/texts/auth";

type Props = {
  onSuccess: (email: string) => void;
};

export const ForgotPasswordForm = ({ onSuccess }: Props) => {
  const {
    formState: { isValid },
    setError,
  } = useFormContext<ForgotPasswordFormValuesType>();

  const { mutate, isPending } = useMutation({
    mutationFn: requestPasswordResetLink,
    onSuccess: (_, data) => {
      successToast({ message: AUTH_TEXTS.forgotPassword.successMessage });
      onSuccess(data.email);
    },
    onError: (err) => setError("root", { message: err.message }),
  });

  return (
    <Form onSubmit={mutate} className="flex flex-col gap-6">
      <FormInputValidation
        name={LOGIN_FIELS_VALIDATION.email}
        type="email"
        label={AUTH_TEXTS.forgotPassword.emailLabel}
        placeholder={AUTH_TEXTS.forgotPassword.emailPlaceholder}
        leftIcon="mdi:email-outline"
      />

      <Button
        type="submit"
        disabled={!isValid || isPending}
        isLoading={isPending}
        className="mt-2"
      >
        {isPending
          ? AUTH_TEXTS.forgotPassword.submittingButton
          : AUTH_TEXTS.forgotPassword.submitButton}
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
