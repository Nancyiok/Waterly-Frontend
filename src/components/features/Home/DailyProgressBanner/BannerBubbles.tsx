import classNames from "classnames";

const BUBBLES = [
  "-top-20 -right-20 size-60 bg-white/10",
  "-bottom-24 right-[15%] size-48 bg-white/5",
  "top-[30%] right-[22%] size-8 bg-white/10",
  "top-[15%] right-[8%] size-3 bg-white/25",
  "top-[55%] right-[6%] size-5 bg-white/15",
  "top-[70%] right-[30%] size-2 bg-white/30",
  "top-[12%] right-[35%] size-1.5 bg-white/35",
  "top-[80%] right-[12%] size-1 bg-white/40",
  "top-[45%] right-[40%] size-1 bg-white/40",];

export const BannerBubbles = () => (
  <>
    {BUBBLES.map((bubble) => (
      <div key={bubble} className={classNames("absolute rounded-full", bubble)} />
    ))}
  </>
);
