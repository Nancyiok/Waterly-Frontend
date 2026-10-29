import * as z from "zod";

export const remindersSchema = z
  .object({
    enabled: z.boolean(),
    intervalMinutes: z.string(),
    startTime: z.string().min(1, "Enter start time"),
    endTime: z.string().min(1, "Enter end time"),
    days: z.array(z.number()).min(1, "Pick at least one day"),
  })

  .refine((values) => values.endTime > values.startTime, {
    message: "Must be later than start time",
    path: ["endTime"],
  });

export type RemindersFormValues = z.infer<typeof remindersSchema>;
