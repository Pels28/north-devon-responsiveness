import clsx from "clsx";
import {Button as NextButton} from "@nextui-org/react";

import { IButtonProps } from ".";
import { forwardRef } from "react";



type IIconButtonProps = Omit<
    IButtonProps, "startIcon" | "endIcon" | "fullWidth" | "wrapIcons" | "title" | "titleClassName" | "description"
>
    
export const IconButton = forwardRef<HTMLButtonElement, IIconButtonProps>((
  {
    id,
    type = "button",
    variant = "solid",
    className,
    onClick,
    color = "primary",
    disabled,
    loading = false,
    size = "md",
    rounded,
    radius = "md",
    children
  },
  ref
) => {
  const innerVariant = variant == "outline"? "bordered" 
    : (variant == "link"? "light" : 
      (variant == "ghost"? "flat" : 
        (variant == "outlined-solid"? "ghost" : variant))
    );
  const innerColor = color == "none"? undefined : color;


  return (
    <NextButton
      ref={ref}
      id={id}
      type={type}
      variant={innerVariant}
      isDisabled={disabled}
      isLoading={loading}
      isIconOnly
      radius={rounded? "full" : radius}
      className={clsx(
        className
      )}
      color={innerColor}
      size={size}
      onClick={onClick}
    >
      {children}
    </NextButton>
  )
});


IconButton.displayName = "IconButton";

export default IconButton;
