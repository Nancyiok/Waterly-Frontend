import { useFormContext } from "react-hook-form";
import { Input } from "@/components/primitives/Input";

type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  rightIcon?: string;
  leftIcon?: string;
  isReadOnly?: boolean;
  disabled?: boolean;
  isOptional?: boolean;
};

const emptyToUndefined = (value: string) => (value === "" ? undefined : value);

export function FormInputValidation({ name, isOptional, ...props }: Props) {
  const { register, formState } = useFormContext();
  const fieldError = formState.errors?.[name];

  return (
    <Input
      name={name}
      registerFunc={register}
      fieldError={fieldError}
      registerOptions={isOptional ? { setValueAs: emptyToUndefined } : undefined}
      {...props}
    />
  );
}

export default FormInputValidation;
