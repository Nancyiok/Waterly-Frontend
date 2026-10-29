import classNames from "classnames";

const switchPosition = "relative inline-flex shrink-0";
const switchSize = "h-6 w-11";
const switchShape = "rounded-full border-2 border-transparent";
const switchCursor = "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50";
const switchTransition = "transition-colors duration-200 ease-in-out";
const switchFocus =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const switchBase = classNames(
  switchPosition,
  switchSize,
  switchShape,
  switchCursor,
  switchTransition,
  switchFocus,
);

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
};

export const ToggleSwitch = ({ checked, onChange, disabled = false, label }: Props) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={label}
    disabled={disabled}
    onClick={() => onChange(!checked)}
    className={classNames(switchBase, checked ? "bg-primary" : "bg-neutral-300")}
  >
    <span
      className={classNames(
        "pointer-events-none inline-block size-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out",
        checked ? "translate-x-5" : "translate-x-0",
      )}
    />
  </button>
);
