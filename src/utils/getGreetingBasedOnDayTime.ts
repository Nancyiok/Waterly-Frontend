import { COMMON_TEXTS } from "@/constants/texts";

export const getGreetingBasedOnDayTime = () => {
  const hour = new Date().getHours();
  if (hour < 12) return COMMON_TEXTS.greetings.morning;
  if (hour < 18) return COMMON_TEXTS.greetings.afternoon;
  return COMMON_TEXTS.greetings.evening;
};
