import { create } from "zustand";
import type { UserProfileState } from "@/types/user";

export const useUserProfileInfo = create<UserProfileState>((set) => ({
  user: null,
  setUser: (userInfo) => set({ user: userInfo }),
}));
