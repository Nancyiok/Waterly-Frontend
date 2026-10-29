import { Form } from "@/components/primitives/Form";
import FormInputValidation from "@/validations/FormInputValidation";
import { useFormContext } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/primitives/Button";
import { SIGN_UP_VALIDATION_FIELDS } from "@/validations/constants/authValidationRules";
import { signUp } from "@/services/auth/auth.service.ts";
import { successToast } from "@/hooks/useToast/useToast";
import { type SignUpFormValuesType } from "@/validations/schemas/signUpValidation.ts";

interface FormFieldItem {
  name: keyof SignUpFormValuesType;
  type: string;
  label: string;
  placeholder?: string;
  leftIcon?: string;
}

const SIGN_UP_FORM_FIELDS: FormFieldItem[] = [
  {
    name: SIGN_UP_VALIDATION_FIELDS.email as keyof SignUpFormValuesType,
    type: SIGN_UP_VALIDATION_FIELDS.email,
    label: "Email",
    placeholder: "Enter email",
    leftIcon: "mdi:email-outline",
  },
  {
    name: SIGN_UP_VALIDATION_FIELDS.password as keyof SignUpFormValuesType,
    type: SIGN_UP_VALIDATION_FIELDS.password,
    label: "Password",
    leftIcon: "mdi:lock-outline",
  },
  {
    name: SIGN_UP_VALIDATION_FIELDS.confirmPassword as keyof SignUpFormValuesType,
    type: SIGN_UP_VALIDATION_FIELDS.password,
    label: "Confirm password",
    leftIcon: "mdi:lock-check-outline",
  },
];

export function SignUpForm() {
  const methods = useFormContext();
  const {
    formState: { isValid },
    setError,
  } = methods;

  const { mutate, isPending } = useMutation({
    mutationFn: signUp,
    onSuccess: (result) => successToast({ message: result.message }),
    onError: (err) => setError("root", { message: err.message }),
  });

  const submitForm = (data: SignUpFormValuesType) => {
    const { confirmPassword: _, ...formData } = data;
    mutate(formData);
  };

  return (
    <Form onSubmit={submitForm} className="flex flex-col gap-6">
      {SIGN_UP_FORM_FIELDS.map((field) => (
        <FormInputValidation key={field.name} {...field} />
      ))}
      <Button type="submit" disabled={!isValid || isPending} isLoading={isPending}>
        SignUp
      </Button>
    </Form>
  );
}
