import type { ComponentProps } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import "./calendar.css";

export type CalendarProps = ComponentProps<typeof DayPicker>;

export const Calendar = (props: CalendarProps) => (
  <DayPicker showOutsideDays weekStartsOn={1} {...props} />
);
