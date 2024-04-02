"use client";
import React, { ChangeEvent, ReactNode, forwardRef, useEffect, useState } from "react";
import {
  Input as NextInput
} from "@nextui-org/react";

import { HidePasswordIcon, ShowPasswordIcon } from "@/icons";
import clsx from "clsx";
import { Poppins } from "@/resources/fonts";



export interface IInputProps {
  id?: string;
  type?: "text" | "password" | "email" | "search" | "url" | "tel" | "number" |"file",
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  autoFocus?: boolean;
  rounded?: boolean;
  radius?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "faded" | "outlined" | "underlined";
  prepend?: ReactNode | string | number;
  append?: ReactNode | string | number;
  description?: string;
  value?: string;
  accept?: string; 
  multiple?: boolean;
  onValueChange?: (val: string) => void;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => any;
  className?: string;
  error?: string;
  onClick?:()=>void;
  classes?: {
    inputWrapper?: string;
  }
};

const Input = forwardRef<HTMLInputElement, IInputProps>((
  {
    id,
    type = "text",
    name,
    label,
    placeholder,
    readonly,
    required,
    disabled,
    autoFocus,
    rounded,
    radius,
    size,
    variant = "outlined",
    prepend,
    append,
    value,
    className,
    error,
    onValueChange,
    onChange,
    onBlur,
    onClick,
    classes
  },
  ref
) =>{
  const innerVariant = variant == "outlined"? "bordered" : variant;
  const [isVisible, setIsVisible] = useState(false);
  const [animateLabel, setAnimateLabel] = useState(!!value);

  const toggleVisibility = () => setIsVisible(!isVisible);


  useEffect(() => {
    if(value && !animateLabel) {
      setAnimateLabel(true);
    }
  }, [value]);
  


  return (
    <NextInput
      ref={ref}
      onClick={onClick}
      id={id}
      type={(type == "password" && isVisible)? "text" : type }
      name={name}
      label={label}
      placeholder={placeholder}
      isReadOnly={readonly}
      isRequired={required}
      isDisabled={disabled}
      autoFocus={autoFocus}
      radius={rounded? "full" : radius}
      size={size}
      variant={innerVariant}
      startContent={prepend}
      className={clsx(
        "text-secondary",
        Poppins.className,
        className,
      )}
      endContent={
        type == "password"? (
          <span className="cursor-pointer" onClick={toggleVisibility}>
            {isVisible? <HidePasswordIcon className="w-5 h-5"/> : <ShowPasswordIcon className="w-5 h-5"/>}
          </span>
        ) : append
      }
      value={value}
      onValueChange={onValueChange}
      onChange={(onChange)}
      onBlur={(e: React.FocusEvent<any, Element>) => {
        const elem = e.target as HTMLInputElement;
        const val = elem.value;
        
        if(!val) {
          setAnimateLabel(false); 
        }
        
        onBlur && onBlur(e)
      }}
      onFocus={() =>{setAnimateLabel(true)}}
      errorMessage={error}
      isInvalid={Boolean(error)}
      classNames={{
        inputWrapper: clsx("border-gray-neutral focus:bg-secondary", classes?.inputWrapper),
        label: clsx(
          {"!-translate-y-6 bg-white w-fit px-1 !text-secondary": animateLabel}
        ),
        innerWrapper: "!items-center"
      }}
    />
  )
});

Input.displayName = "Input";

export default Input;

