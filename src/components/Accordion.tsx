import { ReactNode } from "react";
import { AccordionItem, AccordionItemSlots, Accordion as NextAccordion, SlotsToClasses } from "@nextui-org/react";
import clsx from "clsx";



export interface IAccordionItem {
  id?: string;
  label: ReactNode | string;
  description?: string | ReactNode;
  icon?: ReactNode;
  content?: ReactNode;
  open?: boolean;
  disabled?: boolean;
  prepend?: ReactNode;
  indicator?: {
    open?: ReactNode;
    close?: ReactNode;
  }
  classes?: SlotsToClasses<string>;
}

interface IAccordion {
  items: Array<IAccordionItem>;
  className?: string;
  selectionMode?: "multiple" | "single",
  compact?: boolean;
  variant?: "underlined" | "shadow" | "bordered" | "pills",
  disabled?: boolean;
  accordionItemsStyle?: SlotsToClasses<string>,
  classes?: {
    base?: string
    content: string,
    title: string,
  }
}

function Accordion({
  items,
  className,
  selectionMode,
  compact,
  variant = "pills",
  disabled,
  accordionItemsStyle,
  classes
}: IAccordion) {
  const innerVariant = variant == "pills"? "splitted" : 
    (variant == "underlined"? "light" : variant);
  const expandedItems = items.reduce<Array<string>>((cum, cur, index) => 
    cur.open? [...cum, cur.id??`accordion-${index}`] : cum
  , []);
  const disabledItems = items.reduce<Array<string>>((cum, cur, index) => 
    cur.disabled? [...cum, cur.id??`accordion-${index}`] : cum
  , []);
  


  return (
    <NextAccordion
      selectionMode={selectionMode}
      className={className}
      isCompact={compact}
      variant={innerVariant}
      defaultExpandedKeys={expandedItems}
      disabledKeys={disabledItems}
      isDisabled={disabled}
      itemClasses={{
        base: clsx(classes?.base),
        content: "pb-8 pt-0 pl-16 pr-8",
        title: "p-5 mb-0 "
      }}
    >
      {items?.map((item, index) =>(
        <AccordionItem 
          key={item.id??`accordion-${index}`}
          aria-label={typeof item.label==="string"? item.label: `accordion-${index}` } 
          title={item.label}
          subtitle={item.description}
          startContent={item.prepend}
          classNames={accordionItemsStyle && item.classes}	
          indicator={item.indicator?.close? (({isOpen}:  { isOpen: boolean }) =>(isOpen? item.indicator?.open : item.indicator?.close)) : item.indicator?.open}
        >
          {item.content}
        </AccordionItem>
      ))}
    </NextAccordion>
  )
}

export default Accordion;
