import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SessionState } from "@/types/auth";

export const useUserSession = create<SessionState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      setAccessToken: (accessToken) => set({ accessToken }),
      setUser: (user) => set({ user }),
      logout: () => set({ accessToken: null, user: null }),
    }),
    {
      name: "user-session",
      partialize: (state) => ({ accessToken: state.accessToken }),
    },
  ),
);
