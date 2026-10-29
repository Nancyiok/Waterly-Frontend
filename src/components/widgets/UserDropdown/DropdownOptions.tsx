import { MenuItem } from "@/components/primitives/MenuItem";
import { logout } from "@/services/auth/auth.service";
import { NAVIGATION_TEXTS } from "@/constants/texts/navigation";
import { ROUTES_PATH } from "@/routes/routes.constants";

export const DropdownOptions = () => {
  return (
    <>
      <MenuItem to={ROUTES_PATH.PROFILE} icon="lucide:user">
        {NAVIGATION_TEXTS.userDropdown.myProfile}
      </MenuItem>
      <MenuItem variant="danger" icon="lucide:log-out" onClick={logout}>
        {NAVIGATION_TEXTS.userDropdown.logOut}
      </MenuItem>
    </>
  );
};
