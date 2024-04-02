import React, { useEffect, useState } from "react";
import { Textarea as NextTextarea } from "@nextui-org/react";
import clsx from "clsx";
import { Poppins } from "@/resources/fonts";


interface ITextarea {
    isDisabled?: boolean;
    isInvalid?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    label?: string;
    error?: string;
    description?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    variant?: "flat" | "faded" | "outlined" | "underlined";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onValueChange?: (value?: string) => void;
    onBlur?: (e: any) => void;
    maxRows?: number;
    minRows?: number;
    radius?: "none" | "sm" | "md" | "lg";
    rounded?: boolean;
    fullWidth?: boolean;
    name?: string;
}
function Textarea({ 
  isDisabled, 
  isInvalid, 
  rounded,
  isReadOnly, 
  isRequired, 
  maxRows, 
  minRows, 
  radius, 
  label, 
  error, 
  description, 
  value, 
  placeholder, 
  className, 
  variant = "outlined", 
  fullWidth = true,
  onChange, 
  onValueChange,
  onBlur,
  name 
}: ITextarea ) {
  const innerVariant = variant == "outlined"? "bordered" : variant;
  const [animateLabel, setAnimateLabel] = useState(false);


  useEffect(() => {
    if(value && !animateLabel) {
      setAnimateLabel(true);
    }
  }, [value]);


  return (
    <div>
      <NextTextarea
        maxRows={maxRows}
        minRows={minRows}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
        isRequired={isRequired}
        name={name}
        // labelPlacement=""
        errorMessage={error}
        radius={rounded? "full" : radius}
        description={description}
        value={value}
        label={label}
        placeholder={placeholder}
        className={clsx(
          "text-secondary",
          Poppins.className,
          className
        )}
        variant={innerVariant}
        fullWidth={fullWidth}
        onChange={onChange}
        onValueChange={onValueChange}
        onBlur={(e: { target: HTMLInputElement; }) => {
          const elem = e.target as HTMLInputElement;
          const val = elem.value;
          
          if(!val) {
            setAnimateLabel(false); 
          }
          
          onBlur && onBlur(e)
        }}
        onFocus={() =>{setAnimateLabel(true)}}
        classNames={{
          inputWrapper: "border-gray-neutral focus:bg-secondary",
          label: clsx(
            {"!-translate-y-4 bg-white w-fit px-1 !text-secondary": animateLabel}
          )
        }}
      />
    </div>
  )
}

export default Textarea