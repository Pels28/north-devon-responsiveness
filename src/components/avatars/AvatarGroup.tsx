import { AvatarGroup as NextAvatarGroup} from "@nextui-org/react"
import Avatar from "./Avatar";
import clsx from "clsx";


interface IAvatarProps {
  initials?: string;
  src?: string;
  className?: string;
  placeholder?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: (e?: React.MouseEvent) => void;
  onMouseLeave?: (e?: React.MouseEvent) => void;
}

interface IAvatarGroupProps {
  avatars?: Array<IAvatarProps>;
  size?:"sm" | "md" | "lg" ;	
  className?: string;
  disabled?: boolean;
  bordered?: boolean;
  radius?: "sm" | "md" | "lg" | "none";
  rounded?: boolean;
  max?: number;
  spacedOut?: boolean;
}

function AvatarGroup({
  avatars,
  disabled,
  bordered,
  max,
  size,
  rounded,
  spacedOut,
  className,
  radius
}: IAvatarGroupProps) {

  return (
    <NextAvatarGroup 
      max={max} 
      total={avatars?.length}
      isBordered={bordered}
      isDisabled={disabled}
      isGrid={spacedOut}
      size={size}
      className={clsx(className)}
      radius={rounded? "full" : radius}

    >
      {avatars && avatars.map((avatar, index) => (
        <Avatar
          key={`avatar-${index}`}
          src={avatar.src}
          className={avatar.className}
          initials={avatar.initials}
          onClick={avatar.onClick}
          placeholder={avatar.placeholder}
          onMouseEnter={avatar.onMouseEnter}
          onMouseLeave={avatar.onMouseLeave}
        />
      ))}
    </NextAvatarGroup>
  )
}

export default AvatarGroup;