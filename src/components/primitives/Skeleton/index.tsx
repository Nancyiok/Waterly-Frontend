import classNames from "classnames";

type Props = {
  className?: string;
};

export const Skeleton = ({ className }: Props) => (
  <div className={classNames("animate-pulse rounded-lg bg-neutral-100", className)} />
);
