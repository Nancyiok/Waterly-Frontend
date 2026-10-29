import { type LoginFormValuesType } from "@/validations/schemas/loginValidation";
import { type AuthUser } from "./user";

export type SignUpRequest = {
  email: string;
  password: string;
};

export type LoginRequest = LoginFormValuesType


export type LoginResponse = {
  accessToken: string;
  user: AuthUser;
};


export type SessionState = {
  accessToken: string | null;
  user: AuthUser | null;
  setAccessToken: (accessToken: string | null) => void;
  setUser: (user: AuthUser | null) => void;
  logout: () => void;
};

export type ForgotPasswordRequest = {
  email: string;
};

export type ResetPasswordRequest = {
  token: string;
  password: string;
};

export type RefreshSessionResponse = {
  accessToken: string;
};

export type logInViaGoogleRequest = {
  token: string
}
