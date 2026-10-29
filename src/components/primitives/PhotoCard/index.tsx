import classNames from "classnames";
import { BasePanel } from "../BasePanel";
import { IconBadge } from "../IconBadge";

type Props = {
  image: string;
  title: string;
  subtitle: string;
  onClick: () => void;
  extraLabel?: string;
  isActive?: boolean;
  badgeIcon?: string;
};

export const PhotoCard = ({
  image,
  title,
  subtitle,
  onClick,
  extraLabel,
  isActive = false,
  badgeIcon,
}: Props) => {

  const badge = isActive ? "lucide:check" : badgeIcon;

  return (
    <BasePanel
      variant={isActive ? "primary" : "default"}
      hoverable={!isActive}
      onClick={onClick}
      className={classNames("relative p-2! text-left", isActive && "border-primary")}
    >
      <img
        src={image}
        alt="photo card"
        className="aspect-4/3 w-full rounded-md object-cover object-top"
      />

      {badge && (
        <IconBadge
          icon={badge}
          variant="white"
          size="lg"
          className="absolute top-4 right-4 shadow-sm"
        />
      )}

      <div className="flex flex-1 flex-col px-1.5 pt-2.5 pb-1">
        <span className="font-semibold">{title}</span>
        <span className={classNames("text-neutral-500", extraLabel && "mb-2")}>
          {subtitle}
        </span>
        {extraLabel && (
          <span
            className={classNames(
              "mt-auto self-start rounded-full px-2 py-0.5 font-medium text-primary-dark",
              isActive ? "bg-white" : "bg-primary-foam"
            )}
          >
            {extraLabel}
          </span>
        )}
      </div>
    </BasePanel>
  );
};
