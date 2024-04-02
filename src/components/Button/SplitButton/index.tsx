import { MouseEvent, ReactNode } from "react";
import clsx from "clsx";

import styles from "./splitButton.module.css";
import Button from "..";



interface ISplitButton {
  id?: string;
  label?: string | ReactNode;
  icon?: ReactNode;
  onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

interface ISplitButtonProps {
  buttons: Array<ISplitButton>;
  compact?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  className?: string;
};


function SplitButton({
  buttons,
  compact,
  size = "sm",
  color = "secondary",
  className
}: ISplitButtonProps) {
 

  return (
    <div 
      className={clsx(
        "relative m-0 p-0 overflow-hidden",
        "flex shrink-0 flex-nowrap",
        className
      )}
    >
      {buttons.map((button, index) =>(
        <div
          key={button?.id??`button-${index}`}
          className={clsx(
            "px-2",
            {[styles.splitButton]: (buttons.length > 1 && index !== buttons.length - 1)}
          )}
        >
          <Button 
            variant="link"
            startIcon={button.icon}
            onClick={button.onClick}
            radius="none"
            size={size}
            color={color}
            className={button.className}
          >
            {button.label}
          </Button>
        </div>
      ))}
    </div>
  )
}

export default SplitButton;
