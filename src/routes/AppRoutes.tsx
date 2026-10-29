import ROUTES_COMPONENTS from "./routes.config";
import { useRoutes } from "react-router";
function AppRoutes() {
  return useRoutes(ROUTES_COMPONENTS);
}
export default AppRoutes;
