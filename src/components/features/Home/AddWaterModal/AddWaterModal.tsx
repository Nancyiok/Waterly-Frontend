import { FormProvider } from "react-hook-form";
import { AddWaterFooter } from "./AddWaterFooter";
import { BaseModal } from "@/components/primitives/BaseModal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Form } from "@/components/primitives/Form";
import { AddWaterPortionSize } from "./AddWaterPortionSize";
import { AddWaterAmount } from "./AddWaterAmount";
import { type WaterLogItem } from "../constants";
import { useValidationMethodsForm } from "@/hooks/useValidationMethodsForm";
import {
  addWaterSchema,
  type AddWaterFormValuesType,
} from "@/validations/schemas/addWaterValidation";
import { HOME_TEXTS } from "@/constants/texts/home";

const ADD_WATER_FORM_ID = "add-water-form";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (amount: number) => void;
  editItem?: WaterLogItem | null;
};

export const AddWaterModal = ({
  isOpen,
  onClose,
  onSubmit,
  editItem,
}: Props) => {

  const methods = useValidationMethodsForm(addWaterSchema, {
    amount: editItem ? String(editItem.ml) : "",
  });

  const handleSubmit = ({ amount }: AddWaterFormValuesType) => {
    onSubmit(amount);
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-2xl"
      headerComponent={
        <SectionHeading
          title={editItem ? HOME_TEXTS.addWaterModal.editTitle : HOME_TEXTS.addWaterModal.addTitle}
          description={HOME_TEXTS.addWaterModal.description}
          className=""
        />
      }
      footerComponent={
        <AddWaterFooter
          formId={ADD_WATER_FORM_ID}
          editItem={!!editItem}
          onClose={onClose}
        />
      }
    >
      <div className="p-6">
        <FormProvider {...methods}>
          <Form
            id={ADD_WATER_FORM_ID}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <AddWaterPortionSize />
            <AddWaterAmount />
          </Form>
        </FormProvider>
      </div>
    </BaseModal>
  );
};
