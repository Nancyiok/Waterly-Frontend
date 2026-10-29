import { Navigate, Outlet } from "react-router";
import { ROUTES_PATH } from "@/routes/routes.constants";
import { useUserSession } from "@/store/useUserSession";

export const ProtectedRoute = () => {
  const accessToken = useUserSession((state) => state.accessToken);
  return accessToken ? <Outlet /> : <Navigate to={ROUTES_PATH.LOGIN} replace />;
};
export default ProtectedRoute;