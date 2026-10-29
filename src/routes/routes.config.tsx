import { ROUTES_PATH } from "./routes.constants.ts";
import { SignUpPage } from "@/components/pages/SignUpPage";
import { LoginPage } from "@/components/pages/LoginPage";
import { HomePage } from "@/components/pages/HomePage";
import { MainLayout } from "@/components/layout/MainLayout";
import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { ProfilePage } from "@/components/pages/ProfilePage";
import { StatisticsPage } from "@/components/pages/StatisticsPage";
import { SettingsPage } from "@/components/pages/SettingsPage";
import { HistoryPage } from "@/components/pages/HistoryPage";
import { ForgotPasswordPage } from "@/components/pages/ForgotPasswordPage";
import { ResetPasswordPage } from "@/components/pages/ResetPasswordPage";
import { VerifyEmailPage } from "@/components/pages/VerifyEmailPage";
import { PublicRoute } from "@/routes/PublicRoute";
import { ProtectedRoute } from "@/routes/ProtectedRoute";

const ROUTES_COMPONENTS = [
  {
    element: <PublicRoute />,
    children: [
      { path: ROUTES_PATH.SIGN_UP, element: <SignUpPage /> },
      { path: ROUTES_PATH.LOGIN, element: <LoginPage /> },
      { path: ROUTES_PATH.FORGOT_PASSWORD, element: <ForgotPasswordPage /> },
      { path: ROUTES_PATH.RESET_PASSWORD, element: <ResetPasswordPage /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: ROUTES_PATH.HOME, element: <HomePage /> },
          { path: ROUTES_PATH.PROFILE, element: <ProfilePage /> },
          { path: ROUTES_PATH.STATISTICS, element: <StatisticsPage /> },
          { path: ROUTES_PATH.SETTINGS, element: <SettingsPage /> },
          { path: ROUTES_PATH.HISTORY, element: <HistoryPage /> },
        ],
      },
    ],
  },
  { path: ROUTES_PATH.VERIFY_EMAIL, element: <VerifyEmailPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default ROUTES_COMPONENTS;
