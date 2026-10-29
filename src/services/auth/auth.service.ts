import type {
  SignUpRequest,
  LoginRequest,
  LoginResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  RefreshSessionResponse,
  logInViaGoogleRequest,
} from "@/types/auth";
import {
  httpServiceWithCookie,
  httpService,
} from "@/services/http/http.service.ts";
import { useUserSession } from "@/store/useUserSession.ts";
import { useUserProfileInfo } from "@/store/useUserProfileInfo";
import { queryClient } from "@/services/query/queryClient";
import { disablePush } from "@/services/push/push.service";

export const AUTH_API_URL = "/auth";

const setSession = (data?: LoginResponse | null) => {
  useUserSession.getState().setAccessToken(data?.accessToken ?? null);
  useUserSession.getState().setUser(data?.user ?? null);
};

export const login = async (data: LoginRequest) => {
  const result = await httpServiceWithCookie.post<LoginResponse>(
    `${AUTH_API_URL}/login`,
    {
      ...data,
    },
  );
  setSession(result?.data);
};

export const signUp = async (data: SignUpRequest) => {
  return await httpService.post(`${AUTH_API_URL}/register`, {
    ...data,
  });
};

export const clearUserData = () => {
  useUserSession.getState().logout();
  useUserProfileInfo.getState().setUser(null);
  queryClient.clear();
};

export const logout = async () => {
  try {
    await disablePush().catch(() => undefined);
    await httpServiceWithCookie.delete(`${AUTH_API_URL}/logout`);
  } finally {
    clearUserData();
  }
};

export const requestPasswordResetLink = async (data: ForgotPasswordRequest) => {
  await httpService.post(`${AUTH_API_URL}/forgot-password`, {
    ...data,
  });
};

export const resetPasswordUsingToken = async (data: ResetPasswordRequest) => {
  const result = await httpServiceWithCookie.post<LoginResponse>(
    `${AUTH_API_URL}/reset-password`,
    { ...data },
  );
  setSession(result?.data);
};

export const verifyEmail = async (token: string) => {
  const result = await httpServiceWithCookie.get<LoginResponse>(
    `${AUTH_API_URL}/verify-email`,
    { params: { token } },
  );
  setSession(result?.data);
  return result?.data ?? null;
};

export const refresh = async (): Promise<string | null> => {
  const result = await httpServiceWithCookie.post<RefreshSessionResponse>(
    `${AUTH_API_URL}/refresh`,
  );
  const token = result?.data?.accessToken ?? null;
  useUserSession.getState().setAccessToken(token);
  return token;
};

export const loginViaGoogle = async (data: logInViaGoogleRequest) => {
  const result = await httpServiceWithCookie.post<LoginResponse>(
    `${AUTH_API_URL}/google`,
    { ...data },
  );
  setSession(result?.data);
};
