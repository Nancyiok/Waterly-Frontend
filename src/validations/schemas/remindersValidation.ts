import * as z from "zod";
import { SETTINGS_TEXTS } from "@/constants/texts";

const { validation } = SETTINGS_TEXTS.reminders;

export const remindersSchema = z
  .object({
    enabled: z.boolean(),
    intervalMinutes: z.string(),
    startTime: z.string().min(1, validation.startTimeRequired),
    endTime: z.string().min(1, validation.endTimeRequired),
    days: z.array(z.number()).min(1, validation.daysRequired),
  })

  .refine((values) => values.endTime > values.startTime, {
    message: validation.endTimeOrder,
    path: ["endTime"],
  });

export type RemindersFormValues = z.infer<typeof remindersSchema>;
