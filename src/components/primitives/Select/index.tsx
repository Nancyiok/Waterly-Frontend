import Select, { type ClassNamesConfig } from "react-select";
import classnames from "classnames";
import { DropdownIndicator } from "@/components/primitives/Select/DropdownIndicator";

export type SelectOption = { value: string; label: string };

type Props = {
  name: string;
  options: SelectOption[];
  value: SelectOption | null;
  onChange: (value: string) => void;
  onBlur: () => void;
  placeholder: string;
};

const getControlStyles = (isFocused: boolean) => {
  const baseStyle =
    "flex items-center min-h-10 px-3 rounded-sm border bg-white cursor-pointer";
  const stateStyle = isFocused
    ? "border-primary ring-1 ring-primary"
    : "border-neutral-300";

  return classnames(baseStyle, stateStyle);
};

const getOptionStyles = (isSelected: boolean, isFocused: boolean) => {
  const baseStyle = "px-3 py-2 cursor-pointer";

  if (isSelected) return classnames(baseStyle, "bg-primary text-white");
  if (isFocused) return classnames(baseStyle, "bg-primary-foam text-neutral-900");

  return classnames(baseStyle, "bg-white text-neutral-900");
};

const menuStyles =
  "mt-1 rounded-sm border border-neutral-300 bg-white shadow-lg overflow-hidden z-50";

const classNames: ClassNamesConfig<SelectOption, false> = {
  control: ({ isFocused }) => getControlStyles(isFocused),
  valueContainer: () => "gap-1",
  placeholder: () => "text-neutral-500",
  singleValue: () => "text-neutral-900",
  indicatorSeparator: () => "hidden",
  dropdownIndicator: () => "px-1 text-neutral-500",
  menu: () => menuStyles,
  menuList: () => "py-1",
  option: ({ isSelected, isFocused }) => getOptionStyles(isSelected, isFocused),
};

export const BaseSelect = ({
  name,
  options,
  value,
  onChange,
  onBlur,
  placeholder,
}: Props) => (
  <Select<SelectOption, false>
    unstyled
    name={name}
    options={options}
    value={value}
    onChange={(option) => onChange(option?.value ?? "")}
    onBlur={onBlur}
    placeholder={placeholder}
    classNames={classNames}
    components={{ DropdownIndicator }}
  />
);
