import { useQuery } from "@tanstack/react-query";
import { verifyEmail } from "@/services/auth/auth.service";

export const VERIFY_EMAIL_QUERY_KEY = ["verify-email"];

export const useVerifyEmail = (token: string | null) =>
  useQuery({
    queryKey: [...VERIFY_EMAIL_QUERY_KEY, token],
    queryFn: () => verifyEmail(token!),
    enabled: !!token,
    retry: false,
    staleTime: Infinity,
    meta: { silent: true },
  });
