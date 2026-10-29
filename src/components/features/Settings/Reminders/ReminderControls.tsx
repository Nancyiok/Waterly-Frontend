import { useFormContext, useWatch } from "react-hook-form";
import { Checkbox } from "@/components/primitives/Checkbox";
import { Tabs } from "@/components/primitives/Tabs";
import { ToggleSwitch } from "@/components/primitives/ToggleSwitch";
import FormInputValidation from "@/validations/FormInputValidation";
import type { RemindersFormValues } from "@/validations/schemas/remindersValidation";
import { REMINDER_INTERVAL_OPTIONS, WEEKDAYS, type IntervalValue } from "./constants";
import { SETTINGS_TEXTS } from "@/constants/texts/settings";

export const ReminderControls = () => {
  const { control, setValue, formState } =
    useFormContext<RemindersFormValues>();
  const [enabled, intervalMinutes, days] = useWatch({
    control,
    name: ["enabled", "intervalMinutes", "days"],
  });

  const toggleDay = (day: number, checked: boolean) =>
    setValue(
      "days",
      WEEKDAYS.map(({ value }) => value).filter((value) =>
        value === day ? checked : days.includes(value),
      ),
      { shouldValidate: true, shouldDirty: true },
    );

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-neutral-900">
          {SETTINGS_TEXTS.reminders.enableLabel}
        </span>
        <ToggleSwitch
          checked={enabled}
          onChange={(value) =>
            setValue("enabled", value, { shouldDirty: true })
          }
          label={SETTINGS_TEXTS.reminders.enableAriaLabel}
        />
      </div>

      <fieldset disabled={!enabled} className="space-y-6 disabled:opacity-50">
        <div>
          <span className="mb-2 block font-medium">
            {SETTINGS_TEXTS.reminders.intervalLabel}
          </span>
          <Tabs
            tabs={REMINDER_INTERVAL_OPTIONS}
            selectedValue={intervalMinutes as IntervalValue}
            onSelectedValueChange={(value) =>
              setValue("intervalMinutes", value, { shouldDirty: true })
            }
          />
        </div>

        <div>
          <span className="mb-2 block font-medium">
            {SETTINGS_TEXTS.reminders.daysLabel}
          </span>
          <div className="flex flex-wrap gap-4">
            {WEEKDAYS.map(({ value, label }) => (
              <Checkbox
                key={value}
                label={label}
                checked={days.includes(value)}
                onChange={(checked) => toggleDay(value, checked)}
              />
            ))}
          </div>
          {formState.errors.days && (
            <p className="mt-1 text-danger">{formState.errors.days.message}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FormInputValidation
            name="startTime"
            type="time"
            label={SETTINGS_TEXTS.reminders.fromLabel}
          />
          <FormInputValidation
            name="endTime"
            type="time"
            label={SETTINGS_TEXTS.reminders.toLabel}
          />
        </div>
      </fieldset>
    </>
  );
};
