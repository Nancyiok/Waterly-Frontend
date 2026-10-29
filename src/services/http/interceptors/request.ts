import type { AxiosInstance } from "axios";
import { useUserSession } from "@/store/useUserSession";
import { setAuthHeader } from "./setAuthHeader";

export const setupRequestInterceptor = (client: AxiosInstance) => {
  client.interceptors.request.use((config) => {
    const token = useUserSession.getState().accessToken;
    if (token) {
      setAuthHeader(config, token);
    }
    return config;
  });
};