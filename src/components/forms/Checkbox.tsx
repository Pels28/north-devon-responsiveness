import React, { FocusEvent, ReactElement, ReactNode } from "react";
import { Checkbox as NextCheckbox } from "@nextui-org/react";


interface ICheckboxProps {
  name?: string;
  id?: string;

  disabled?: boolean;
  indeterminate?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  rounded?: boolean;
  radius?: "lg" | "md" | "sm" | "none";
  color?: "primary" | "secondary"
  strikethrough?: boolean;
  checkIcon?: ReactNode | JSX.Element | ReactElement;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  onBlur?: (e: FocusEvent) => void;
  readOnly?: boolean;
  required?: boolean;
  defaultChecked?: boolean;
  label?: string | ReactNode | JSX.Element | ReactElement;
  children?: ReactNode | JSX.Element | ReactElement;
}

function Checkbox({
  disabled,
  indeterminate,
  size = "md",
  className,
  rounded,
  radius = "sm",
  strikethrough,
  checkIcon,
  checked,
  onChange,
  onBlur,
  readOnly,
  required,
  label = "Option",
  name,
  id,
  children,
  defaultChecked,
  color = "primary"
}: ICheckboxProps) {

  return (
    <NextCheckbox 
      defaultSelected
      isDisabled={disabled}
      isIndeterminate={indeterminate}
      className={className}
      size={size}
      radius={rounded ? "full" : radius}
      lineThrough={strikethrough}
      icon={checkIcon}
      isSelected={checked}
      onValueChange={onChange}
      onBlur={onBlur}
      isReadOnly={readOnly}
      isRequired={required}
      value={checked? String(checked) : undefined}
      name={name}
      id={id}
      defaultChecked={defaultChecked}
      checked={checked}
      color={color}
    >
      {children??label}
    </NextCheckbox>
  )
}

export default Checkbox;