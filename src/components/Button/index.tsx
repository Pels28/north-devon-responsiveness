"use client"

import React, { forwardRef, MouseEvent, ReactElement, ReactNode } from "react";
import {extendVariants, Button as NextButton} from "@nextui-org/react";
import clsx from "clsx";
import { Poppins } from "@/resources/fonts";



const ExtendedButton = extendVariants(NextButton, {
  variants: {
    isDisabled:{
      true: "cursor-not-allowed bg-gray-neutral text-secondary font-bold",
      false: "font-semibold"
    }
  }
});

export interface IButtonProps {
    children?: ReactElement | ReactNode | JSX.Element;
    title?: string;
    type?: "submit" | "button" | "reset";
    variant?: "solid" | "outline" | "link" | "ghost" | "faded" | "outlined-solid";
    className?: string;
    color?: "primary" | "secondary" | "none";
    endIcon?: JSX.Element | ReactElement | ReactNode;
    startIcon?: JSX.Element | ReactElement | ReactNode;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    fullWidth?: boolean;
    disabled?: boolean;
    wrapIcons?: boolean;
    loading?: boolean;
    titleClass?: string;
    size?: "sm" | "md" | "lg";
    description?: string;
    rounded?: boolean;
    radius?: "none" | "sm" | "md" | "lg";
    id?: string;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((
  {
    id,
    title,
    type = "button",
    variant = "solid",
    className,
    endIcon,
    startIcon,
    onClick,
    fullWidth = false,
    color = "primary",
    disabled,
    wrapIcons,
    loading = false,
    titleClass,
    size = "md",
    description,
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
    <ExtendedButton
      id={id}
      isDisabled={disabled}
      disabled={disabled}
      size={size}
      ref={ref}
      type={type}
      radius={rounded? "full" : radius}
      variant={innerVariant}
      isLoading={loading}
      startContent={startIcon}
      endContent={endIcon}
      fullWidth={fullWidth}
      className={clsx(
        "gap-3",
        {"py-6": size == "lg"},
        Poppins.className,
        className,
      )}
      onClick={onClick}
      color={innerColor}
      
    >
      {children??(
        <div className={clsx(
          "relative",
          {["flex-grow"]: wrapIcons },
          titleClass
        )}>
          {title}
          {description && (
            <p className="text-xs font-light">{description}</p>
          )}
        </div>
      )}
    </ExtendedButton> 
  );
});

Button.displayName = "Button";

export default Button;



