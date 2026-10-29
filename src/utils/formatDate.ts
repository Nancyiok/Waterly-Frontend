import dayjs, { type ConfigType } from "dayjs";

export const formatDate = (date: ConfigType, format: string) => dayjs(date).format(format);
