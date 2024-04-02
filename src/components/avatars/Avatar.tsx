import {Avatar as NextAvatar, AvatarIcon} from "@nextui-org/react";
import clsx from "clsx";



interface IAvatarProps{
  initials?: string;
  src?: string;
  size?:"sm" | "md" | "lg" ;	
  className?: string;
  placeholder?: React.ReactNode;
  disabled?: boolean;
  bordered?: boolean;
  radius?: "sm" | "md" | "lg" | "none";
  rounded?: boolean;
  onClick?: () => void;
  onMouseEnter?: (e?: React.MouseEvent) => void;
  onMouseLeave?: (e?: React.MouseEvent) => void;
  color?: "primary" | "secondary";
}

function Avatar({
  src,
  size,
  initials,
  className,
  disabled,
  bordered,
  rounded,
  radius,
  placeholder,
  onClick,
  onMouseEnter,
  onMouseLeave,
  color,
}: IAvatarProps) {
  const innerShowFallback = !initials && !src;

  return (
    <NextAvatar
      src={src}
      size={size}
      name={initials}
      className={clsx(
        {"cursor-pointer": onClick},
        className,
      )}
      isDisabled={disabled}
      isBordered={bordered}
      radius={rounded? "full" : radius}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      fallback={innerShowFallback? placeholder??<AvatarIcon  /> : undefined}
      showFallback={innerShowFallback}
      color={color}
    />
  )
}

export default Avatar;
