import { useState } from "react";
import { Icon } from "@iconify/react";
import { COMMON_TEXTS } from "@/constants/texts";

type PhotoSize = "sm" | "lg";

type Props = {
  avatarLink?: string | null;
  size?: PhotoSize;
};

const photoSizes: Record<PhotoSize, string> = {
  sm: "size-9",
  lg: "size-20",
};

const iconSizes: Record<PhotoSize, string> = {
  sm: "size-5",
  lg: "size-10",
};

export const UserPhoto = ({ avatarLink, size = "sm" }: Props) => {
  const [isBroken, setIsBroken] = useState(false);

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-primary-foam text-primary-dark shadow-xs overflow-hidden ${photoSizes[size]}`}
    >
      {avatarLink && !isBroken ? (
        <img
          src={avatarLink}
          alt={COMMON_TEXTS.userPhotoAlt}
          className={`object-cover ${photoSizes[size]}`}
          referrerPolicy="no-referrer"
          onError={() => setIsBroken(true)}
        />
      ) : (
        <Icon icon="lucide:user-round" className={iconSizes[size]} />
      )}
    </div>
  );
};
