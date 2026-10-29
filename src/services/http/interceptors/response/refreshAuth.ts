import {
  HttpStatusCode,
  type AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";
import { normalizeError } from "../../errors";
import { AUTH_API_URL, clearUserData, refresh } from "@/services/auth/auth.service";
import { errorToast } from "@/hooks/useToast/useToast";
import { setAuthHeader } from "../setAuthHeader";
import { COMMON_TEXTS } from "@/constants/texts/common";

export interface RetryableRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let refreshPromise: Promise<string | null> | null = null;

const refreshSession = async (): Promise<string | null> => {
  if (!refreshPromise) {
    refreshPromise = refresh()
      .catch((refreshError) => {
        errorToast({ message: COMMON_TEXTS.errors.sessionExpired });
        clearUserData();
        throw refreshError;
      })
      .finally(() => {
        refreshPromise = null;
      });
  }
  return refreshPromise;
};

export const shouldAttemptRefresh = (
  error: AxiosError,
  originalRequest?: RetryableRequestConfig,
): originalRequest is RetryableRequestConfig =>
  !!originalRequest &&
  !originalRequest._retry &&
  error.response?.status === HttpStatusCode.Unauthorized &&
  !originalRequest.url?.startsWith(AUTH_API_URL);

export const handleAuthRefresh = async (
  error: AxiosError,
  client: AxiosInstance,
): Promise<unknown> => {
  const originalRequest = error.config as RetryableRequestConfig | undefined;

  if (!shouldAttemptRefresh(error, originalRequest)) {
    return null;
  }

  originalRequest._retry = true;

  try {
    const newAccessToken = await refreshSession();
    if (newAccessToken) {
      setAuthHeader(originalRequest, newAccessToken);
    }
    return client(originalRequest);
  } catch (refreshError) {
    const sessionError = normalizeError(refreshError);
    sessionError.isSessionExpired = true;
    return Promise.reject(sessionError);
  }
};
