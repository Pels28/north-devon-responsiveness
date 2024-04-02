import React, { ReactNode } from "react";
import { AvatarIcon, User } from "@nextui-org/react";



type IUserAvatarProps = {
  name: string | ReactNode;
  description?: string | ReactNode;
  src?: string;
  initials?: string;
  placeholder?: ReactNode;
  className?: string;
  avatarSize?: "sm" | "md" | "lg",
  titleSize?: string
}

function UserAvatar({
  name,
  description,
  initials,
  placeholder,
  src,
  className,
  avatarSize = "lg",
  titleSize
}: IUserAvatarProps) {
  const innerShowFallback = !initials && !src;

  return (
    <User
      name={name}
      description={description}
      className={className}
      avatarProps={{
        src: src,
        name: initials,
        fallback: innerShowFallback? placeholder??<AvatarIcon  /> : undefined,
        showFallback: innerShowFallback,
        size: avatarSize
      }}
      classNames={{
        name: `font-semibold text-base ${titleSize}`,
        description: "font-light text-xs leading-none"
      }}
    />
  )
}

export default UserAvatar