import { useForm, type FieldValues, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, type ZodType } from "zod";

export const useValidationMethodsForm = <ZodSchema>(
  schema: ZodType<unknown, FieldValues>,
  defaultValues?: DefaultValues<z.infer<ZodSchema>>,
) => {
  return useForm({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(schema),
  });
};
