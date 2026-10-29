import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { errorToast } from "@/hooks/useToast/useToast";
import { COMMON_TEXTS } from "@/constants/texts/common";
import { ApiError } from "@/services/http/errors";

const showErrorToast = (error: unknown) => {
  if (error instanceof ApiError && error.isSessionExpired) return;
  const message =
    error instanceof Error ? error.message : COMMON_TEXTS.errors.unknownError;
  errorToast({ message });
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta?.silent) return;
      showErrorToast(error);
    },
  }),
  mutationCache: new MutationCache({
    onError: (error, _variables, _onMutateResult, mutation) => {
      if (mutation.meta?.silent) return;
      showErrorToast(error);
    },
  }),
  defaultOptions: {
    queries: { retry: 1, refetchOnWindowFocus: false },
  },
});
