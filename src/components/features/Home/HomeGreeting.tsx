import { PageHeader } from "@/components/primitives/PageHeader";
import { useUserProfileInfo } from "@/store/useUserProfileInfo";
import { getGreetingBasedOnDayTime } from "@/utils/getGreetingBasedOnDayTime";
import { HOME_TEXTS } from "@/constants/texts/home";

export const HomeGreeting = () => {
  const user = useUserProfileInfo((state) => state.user);
  const userName = user?.name?.trim() || "friend";

  return (
    <PageHeader
      title={`${getGreetingBasedOnDayTime()}, ${userName}`}
      description={HOME_TEXTS.greetingDescription}
    />
  );
};
