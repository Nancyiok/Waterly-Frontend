import type {UpdateUserProfileRequest, UserProfile} from "@/types/user";
import {httpService} from "@/services/http/http.service.ts";
import {useUserProfileInfo} from "@/store/useUserProfileInfo";

const PROFILE_API_URL = "/profile";

export const getUserProfile = async () => {
    const result = await httpService.get<UserProfile>(PROFILE_API_URL);
    const profile = result?.data ?? null;
    useUserProfileInfo.getState().setUser(profile);
    return profile;
};

export const updateUserProfile = async (data: UpdateUserProfileRequest) => {
    const result = await httpService.patch<UserProfile>(PROFILE_API_URL, data);
    const profile = result?.data ?? null;
    useUserProfileInfo.getState().setUser(profile);
    return profile;
};
