import { useEffect } from "react";
import { FormProvider } from "react-hook-form";
import { BasePanel } from "@/components/primitives/BasePanel";
import { Button } from "@/components/primitives/Button";
import { Form } from "@/components/primitives/Form";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { useValidationMethodsForm } from "@/hooks/useValidationMethodsForm";
import {
  remindersSchema,
  type RemindersFormValues,
} from "@/validations/schemas/remindersValidation";
import { ReminderControls } from "./ReminderControls";
import { DEFAULT_REMINDER_SETTINGS, WEEKDAYS } from "./constants";
import { SETTINGS_TEXTS } from "@/constants/texts/settings";
import { DATE_FORMATS } from "@/constants/dateFormats";
import { formatDate } from "@/utils/formatDate";
import {
  useUpdateWaterReminder,
  useWaterReminder,
} from "@/hooks/useWaterReminder";
import { enablePush, PUSH_RESULT } from "@/services/push/push.service";
import { successToast, warnToast } from "@/hooks/useToast/useToast";
import type { WaterReminder } from "@/types/reminder";

const toFormValues = ({
  enabled,
  intervalMinutes,
  startTime,
  endTime,
  days,
}: WaterReminder): RemindersFormValues => ({
  enabled,
  intervalMinutes: String(intervalMinutes),
  startTime,
  endTime,
  days: WEEKDAYS.map(({ value }) => value).filter((value) => days.includes(value)),
});

const PUSH_WARNINGS = {
  [PUSH_RESULT.denied]: SETTINGS_TEXTS.toasts.pushDenied,
  [PUSH_RESULT.unsupported]: SETTINGS_TEXTS.toasts.pushUnsupported,
};

export const RemindersPanel = () => {
  const methods = useValidationMethodsForm(
    remindersSchema,
    DEFAULT_REMINDER_SETTINGS,
  );
  const { data: reminder } = useWaterReminder();
  const { mutateAsync: updateReminder, isPending } = useUpdateWaterReminder();

  useEffect(() => {
    if (reminder && !methods.formState.isDirty) methods.reset(toFormValues(reminder));
  }, [reminder, methods]);

  const handleSave = async (values: RemindersFormValues) => {
    const pushResult = values.enabled ? await enablePush() : null;

    const savedReminder = await updateReminder({
      ...values,
      intervalMinutes: Number(values.intervalMinutes),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });
    if (savedReminder) methods.reset(toFormValues(savedReminder));

    successToast({ message: SETTINGS_TEXTS.toasts.remindersSaved });
    if (pushResult && pushResult !== PUSH_RESULT.enabled) {
      warnToast({ message: PUSH_WARNINGS[pushResult] });
    }
  };

  return (
    <BasePanel>
      <SectionHeading
        title={SETTINGS_TEXTS.reminders.title}
        icon="lucide:bell"
        iconClassName="text-primary"
        description={SETTINGS_TEXTS.reminders.description}
      />
      <FormProvider {...methods}>
        <Form onSubmit={handleSave} className="space-y-6">
          <ReminderControls />

          {reminder?.nextReminderAt && (
            <p className="text-neutral-500">
              {SETTINGS_TEXTS.reminders.nextReminder(
                formatDate(
                  reminder.nextReminderAt,
                  DATE_FORMATS.weekDayDayMonthTime,
                ),
              )}
            </p>
          )}

          <Button
            type="submit"
            isLoading={isPending}
            disabled={!methods.formState.isDirty}
          >
            {SETTINGS_TEXTS.reminders.saveButton}
          </Button>
        </Form>
      </FormProvider>
    </BasePanel>
  );
};
