import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { normalizeError } from "../../errors";
import { handleAuthRefresh } from "./refreshAuth";

export const setupResponseInterceptor = (client: AxiosInstance) => {
  client.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
      const refreshResult = await handleAuthRefresh(error, client);
      if (refreshResult !== null) {
        return refreshResult;
      }
      const normalizedError = normalizeError(error);
      return Promise.reject(normalizedError);
    },
  );
};
