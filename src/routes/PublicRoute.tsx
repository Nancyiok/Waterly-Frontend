import { Navigate, Outlet } from "react-router";
import { ROUTES_PATH } from "./routes.constants";
import { useUserSession } from "@/store/useUserSession";

export const PublicRoute = () => {
  const accessToken = useUserSession((state) => state.accessToken);
  return accessToken ? <Navigate to={ROUTES_PATH.HOME} replace /> : <Outlet />;
};
export default PublicRoute;