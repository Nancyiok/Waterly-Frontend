import { COMMON_TEXTS } from "@/constants/texts/common";

export const OrDivider = () => {
  return (
    <div className="my-5 flex items-center gap-3">
      <div className="h-px flex-1 bg-neutral-200" />
      <span className="text-neutral-400">{COMMON_TEXTS.or}</span>
      <div className="h-px flex-1 bg-neutral-200" />
    </div>
  );
};
