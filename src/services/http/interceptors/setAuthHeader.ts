import { type InternalAxiosRequestConfig } from "axios";

export const setAuthHeader = (request: InternalAxiosRequestConfig, token: string) => {
  request.headers.set("Authorization", `Bearer ${token}`);
};
