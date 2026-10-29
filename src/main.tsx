import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import { ToastCloseButton } from "@/components/layout/ToastNotification/ToastCloseButton";
import { queryClient } from "@/services/query/queryClient";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <App />
          <ToastContainer
            closeButton={ToastCloseButton}
            hideProgressBar={true}
            newestOnTop={true}
            autoClose={3000}
          />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
