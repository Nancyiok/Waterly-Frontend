type Tab<T extends string> = {
  value: T;
  label: string;
};

type Props<T extends string> = {
  selectedValue: T;
  onSelectedValueChange: (value: T) => void;
  tabs: readonly Tab<T>[];
};

const tabListLayout = "inline-flex self-start gap-1 p-1";
const tabListSurface = "rounded-full bg-neutral-100/70";

const tabLayout = "px-4 py-1.5 rounded-full";
const tabTypography = "font-medium whitespace-nowrap";
const tabTransition = "transition-all duration-200 ease-out";
const tabInteraction =
  "cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

const tabClass = `${tabLayout} ${tabTypography} ${tabTransition} ${tabInteraction}`;
const activeTabClass = `${tabClass} bg-white text-primary-dark shadow-sm`;
const inactiveTabClass = `${tabClass} text-neutral-500 enabled:hover:text-neutral-900`;

export const Tabs = <T extends string>({
  selectedValue,
  onSelectedValueChange,
  tabs,
}: Props<T>) => {
  return (
    <div role="tablist" className={`${tabListLayout} ${tabListSurface}`}>
      {tabs.map(({ value, label }) => {
        const isActive = selectedValue === value;
        return (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectedValueChange(value)}
            className={isActive ? activeTabClass : inactiveTabClass}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};
