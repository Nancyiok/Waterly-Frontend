import { useEffect } from "react";
import { useUserProfileInfo } from "@/store/useUserProfileInfo";
import { getUserProfile } from "@/services/user/user.profile.service";
import { UserPhoto } from "../UserPhoto";

export const UserInfo = () => {
  const user = useUserProfileInfo((state) => state.user);

  useEffect(() => {
    if (!user) {
      void getUserProfile();
    }
  }, [user]);

  return (
    <div className="flex items-center gap-2.5">
      <UserPhoto avatarLink={user?.avatarLink} />
      <span className="font-semibold text-neutral-900 md:block hidden">
        {user?.name}
      </span>
    </div>
  );
};
