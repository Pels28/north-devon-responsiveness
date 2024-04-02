"use client"
import { ChangeEvent, FocusEvent, ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import {Select as NextSelect, SelectItem, SelectSection, SelectedItems} from "@nextui-org/react";

import { Key } from "../Dropdown";



export interface ISelectOption {
  id: string;
  label: string | ReactNode;
  description?: string;
  icon?: ReactNode;
  disabled?: boolean;
  href?: string;
  children?: Array<ISelectOption>;
  className?: string;
  value?: string;
}

interface ISelectProps {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  multiSelect?: boolean;
  required?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  radius?: "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
  variant?: "flat" | "faded" | "outlined" | "underlined";
  prepend?: ReactNode | string | number;
  className?: string;
  description?: string;
  options?: Array<ISelectOption>;
  loading?: boolean;
  selectorIcon?: ReactNode;
  selectorIconRotate?: boolean;
  error?: string;
  value?: ISelectOption | Array<ISelectOption>;
  onValueChange?: (val?: ISelectOption | Array<ISelectOption>) => void;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.FocusEvent<Element, Element>) => any;
  valueRender?: ((items: SelectedItems<ISelectOption>) => ReactNode) | undefined;

  autoFocus?: boolean;
};


export default function Select({
  label,
  id,
  name,
  className,
  value,
  options = [],
  placeholder,
  multiSelect,
  disabled,
  loading,
  required,
  size,
  variant = "outlined",
  rounded,
  radius,
  prepend,
  description,
  selectorIconRotate,
  selectorIcon,
  error,
  valueRender,
  onValueChange,
  onChange,
  onBlur
}: ISelectProps) {
  const innerVariant = variant == "outlined"? "bordered" : variant;
  const disabledKeys = options?.reduce<Array<string>>((cum, cur) =>  cur.disabled? [...cum, cur.id] : cum, []);
  const [animateLabel, setAnimateLabel] = useState(false);


  const selectedKeys = () =>{
    if(value) {
      if(Array.isArray(value)) {
        const selected = value.reduce<Array<string>>((cum, curr) => [...cum, curr.value??curr.id], []);
        return new Set(selected);
      } else {
        return new Set([value.id]);
      } 
    }
  
    return undefined
  }

  const handleSelectionChange = (key: Set<Key> | Key ) => {
    if(typeof key == "string" || typeof key == "number") {
      const opt = options?.find((option) => option.value == key || option.id == key);
      if(opt) onValueChange && onValueChange(opt);
      
    } else {
      const opts = options?.filter((option) => key.has(option.id))
      onValueChange && onValueChange(opts);
    }
  }


  useEffect(() => {
    if(value && !animateLabel) {
      setAnimateLabel(true);
    }
  }, [value]);

  
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <NextSelect
        id={id}
        name={name}
        label={label}
        className={className}
        // value={Array.from(selectedKeys()??[])}
        items={options}
        placeholder={placeholder}
        aria-label={label}
        selectionMode={multiSelect? "multiple" : "single"}
        isDisabled={disabled}
        isRequired={required}
        isLoading={loading}
        disabledKeys={disabledKeys}
        size={size}
        variant={innerVariant}
        radius={rounded? "full" : radius}
        startContent={prepend}
        description={description}
        selectorIcon={selectorIcon}
        disableSelectorIconRotation={!selectorIconRotate}
        errorMessage={error}
        required={required}
        selectedKeys={selectedKeys()}
        onSelectionChange={handleSelectionChange}
        onChange={onChange}
        onBlur={(e: FocusEvent<Element, Element>) => {
          const val = selectedKeys();
          if(!val) {
            setAnimateLabel(false); 
          }
        
          onBlur && onBlur(e);
        }}
        renderValue={valueRender}
        classNames={{
          innerWrapper: "border-gray-neutral",
          value: "text-secondary",
          label: clsx(
            {"!-translate-y-6 bg-white w-fit px-1 !text-secondary": animateLabel}
          ),
          trigger: "h-14 rounded-medium"

        }}
        onFocus={() => setAnimateLabel(true)}
        
      >
        {(option: { id: any; value: any; icon: any; className: any; label: string; }) =>(
          // <>{option.children? (
          //   <SelectSection 
          //     title={option.label as string} 
          //     showDivider
          //     classNames={{
          //       heading: option.className
          //     }}
          //   >
          //     {option.children.map((child) =>(
          //       <SelectItem 
          //         key={child.id}
          //         value={child.value}
          //         startContent={child.icon}
          //         className={child.className}
          //       >
          //         {child.label}
          //       </SelectItem>
          //     ))}
          //   </SelectSection>
          // ) : (
          <SelectItem 
            key={option.id}
            value={option.value}
            startContent={option.icon}
            className={option.className}
            textValue={option.label as string}
          >
            {option.label}
          </SelectItem>
          // )}</>
        )}
      </NextSelect>
    </div>
  );
}
