import { AUTH_TEXTS } from "@/constants/texts/auth";
import { useFormContext } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { successToast } from "@/hooks/useToast/useToast.tsx";
import { Form } from "@/components/primitives/Form";
import { Button } from "@/components/primitives/Button";
import { Link } from "@/components/primitives/Link";
import { ROUTES_PATH } from "@/routes/routes.constants";
import FormInputValidation from "@/validations/FormInputValidation";
import { LOGIN_FIELS_VALIDATION } from "@/validations/constants/authValidationRules";
import { login } from "@/services/auth/auth.service.ts";
import { type LoginFormValuesType } from "@/validations/schemas/loginValidation.ts";

interface FormFieldItem {
  name: keyof LoginFormValuesType;
  type: string;
  label: string;
  placeholder?: string;
  leftIcon?: string;
}

const LOGIN_FORM_FIELDS: FormFieldItem[] = [
  {
    name: LOGIN_FIELS_VALIDATION.email,
    type: "email",
    label: "Email",
    placeholder: "Enter email",
    leftIcon: "mdi:email-outline",
  },
  {
    name: LOGIN_FIELS_VALIDATION.password,
    type: "password",
    label: "Password",
    placeholder: "Enter password",
    leftIcon: "mdi:lock-outline",
  },
];

export function LoginForm() {
  const methods = useFormContext<LoginFormValuesType>();
  const {
    formState: { isValid },
    setError,
  } = methods;
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () =>
      successToast({ message: "You have logged in successfully!" }),
    onError: (err) => setError("root", { message: err.message }),
  });

  return (
    <Form onSubmit={mutate} className="flex flex-col gap-6">
      {LOGIN_FORM_FIELDS.map((field) => (
        <FormInputValidation key={field.name} {...field} />
      ))}

      <div className="-mt-3 flex justify-end">
        <Link
          to={ROUTES_PATH.FORGOT_PASSWORD}
          variant="muted"
          size="sm"
        >
          {AUTH_TEXTS.login.forgotPasswordLinkText}
        </Link>
      </div>

      <Button
        type={"submit"}
        disabled={!isValid || isPending}
        isLoading={isPending}
        className="mt-2"
      >
        {isPending ? "Logging in..." : "Login"}
      </Button>
    </Form>
  );
}

export default LoginForm;
