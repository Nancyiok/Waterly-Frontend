import { components, type DropdownIndicatorProps } from "react-select";
import classNames from "classnames";
import { type SelectOption } from "@/components/primitives/Select";
import { Icon } from "@iconify/react";

export const DropdownIndicator = (
  props: DropdownIndicatorProps<SelectOption, false>,
) => (
  <components.DropdownIndicator {...props}>
    <Icon
      icon="mdi:chevron-down"
      width={20}
      height={20}
      className={classNames("transition-transform", {
        "rotate-180": props.selectProps.menuIsOpen,
      })}
    />
  </components.DropdownIndicator>
);
