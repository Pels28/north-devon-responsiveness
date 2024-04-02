"use client"

import { ReactElement, ReactNode } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Dropdown as NextDropdown
} from "@nextui-org/react";
import clsx from "clsx";



interface IOption {
  id: string;
  label: string | ReactNode;
  description?: string;
  icon?: ReactNode;
  disabled?: boolean;
  href?: string;
  children?: Array<IOption>;
  className?: string;
  onClick?: () => void;
}

export type Key = string | number;

interface IDropdownProps {
  label?: string;
  options?: Array<IOption>;
  variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow";
  selectable?: boolean;
  multiSelect?: boolean;
  closeOnSelect?: boolean;
  selectedOption?: IOption;
  selectedOptions?: Array<IOption>
  onChange?: (option?: IOption | Array<IOption>) => void;
  position?: "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" 
    | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
  backdrop?: "transparent" | "opaque" | "blur";
  arrowClassName?: string;
  backdropClassName?: string;
  wrapperClassName?: string;
  contentClassName?: string;
  triggerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  blockScroll?: boolean;
  children?: ReactNode | ReactElement | JSX.Element;
};

function Dropdown({
  children,
  options = [],
  label,
  variant,
  selectable,
  multiSelect,
  closeOnSelect,
  selectedOption,
  selectedOptions = [],
  onChange,
  position="bottom",
  backdrop,
  arrowClassName,
  backdropClassName,
  contentClassName,
  triggerClassName,
  wrapperClassName,
  descriptionClassName,
  titleClassName,
  blockScroll,
}: IDropdownProps) {
  const selectedKeys = () =>{
    if(multiSelect && selectedOptions) {
      const selected = selectedOptions.reduce<Array<string>>((cum, curr) => [...cum, curr.id], []);
      return new Set(selected);
    } else if(selectable && selectedOption) {
      return [selectedOption.id];
    } 
  
    return undefined
  }
  const disabledKeys = options?.reduce<Array<string>>((cum, cur) => cur.disabled? [...cum, cur.id] : cum, []);


  const handleChange = (key: Set<Key> | Key ) => {
    if(typeof key == "string" || typeof key == "number") {
      const opt = options?.find((option) => option.id == key);
      onChange && onChange(opt);
    } else {
      const opts = options?.filter((option) => key.has(option.id))
      onChange && onChange(opts);
    }
  }


  return (
    <NextDropdown 
      backdrop={backdrop} 
      placement={position}
      shouldBlockScroll={blockScroll}
      classNames={{
        arrow: arrowClassName,
        backdrop: backdropClassName,
        base: wrapperClassName,
        content: contentClassName,
        trigger: triggerClassName
      }}
      className="relative w-max"
      style={{width: "inherit"}}
    >
      <DropdownTrigger>
        {children}
      </DropdownTrigger>

      <DropdownMenu 
        aria-label={label??"dropdown"} 
        disabledKeys={disabledKeys}
        variant={variant}
        selectionMode={multiSelect? "multiple" : (selectable? "single" : "none")}
        closeOnSelect={closeOnSelect}
        selectedKeys={selectedKeys()}
        onSelectionChange={handleChange}
        itemClasses={{
          title: titleClassName,
          description: descriptionClassName
        }}
        items={options}
      >
        {(option: { id: any; href: any; icon: any; description: any; className: any; onClick: any; label: any; }) =>(
          <DropdownItem 
            key={option.id} 
            href={option.href}
            startContent={option.icon}
            description={option.description}
            className={option.className}
            onClick={option.onClick}
          >
            {option.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </NextDropdown>
  )
}

export default Dropdown;



{/** 
    <>{option.children? (
      <DropdownSection 
        title={option.label as string} 
        showDivider
        classNames={{
          heading: option.className
        }}
      >
        {option.children.map((child) =>(
          <DropdownItem 
            key={child.id} 
            href={child.href}
            startContent={child.icon}
            description={child.description}
            className={child.className}
            // onClick={child.onClick}
          >
            {child.label}
          </DropdownItem>
        ))}
      </DropdownSection>
    ) : (
      
    )}</>
  */}