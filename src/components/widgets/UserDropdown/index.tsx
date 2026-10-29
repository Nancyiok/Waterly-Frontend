import { Dropdown } from "@/components/primitives/Dropdown";
import { UserInfo } from "./UserInfo";
import { DropdownOptions } from "./DropdownOptions";

export const UserDropdown = () => {
  return (
    <Dropdown trigger={<UserInfo />}>
      <DropdownOptions />
    </Dropdown>
  );
};
