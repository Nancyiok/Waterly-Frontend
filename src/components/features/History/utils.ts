import dayjs from "dayjs";
import { formatDate } from "@/utils/formatDate";
import { DATE_FORMATS } from "@/constants/dateFormats";

export const toDateParam = (date?: Date) =>
  date ? formatDate(date, DATE_FORMATS.isoDate) : null;

export const fromDateParam = (param?: string) =>
  param ? dayjs(param).toDate() : undefined;
