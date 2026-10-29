import {UserPhoto} from "@/components/widgets/UserPhoto";
import {useUserProfileInfo} from "@/store/useUserProfileInfo";

export const ProfileAvatar = () => {
    const profile = useUserProfileInfo((state) => state.user);

    return <UserPhoto avatarLink={profile?.avatarLink} size="lg"/>;
};
