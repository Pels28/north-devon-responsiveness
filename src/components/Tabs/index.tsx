"use client"

import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal } from "react";
import { 
  Tabs as NextTabs, Tab
} from "@nextui-org/react";
import clsx from "clsx";

import styles from "./tabs.module.css";
import { Poppins } from "@/resources/fonts";


interface ITabItem {
  id: string;
  label: string | ReactNode;
  content?: ReactNode | string;
  disabled?: boolean;
  href?: string
}
interface ITabsProps {
    tabList: Array<ITabItem>;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    rounded?: boolean;
    radius?: "sm" | "md" | "lg" | "none";
    variant?: "solid" | "underlined" | "bordered" | "pill";
    activeTabId?: string;
    onSwitchTab?: (activeTabId: string) => void;
    wrapperClassName?: string;
    tabClassName?: string;
    tabContentClassName?: string;
    tabListClassName?: string;
    cusror?: string
    color?: "primary" | "secondary";
}

function Tabs({
  tabList,
  disabled,
  size = "sm",
  radius,
  rounded,
  variant = "underlined",
  activeTabId,
  onSwitchTab,
  tabClassName,
  tabContentClassName,
  tabListClassName,
  wrapperClassName,
  color,
  cusror,
}: ITabsProps) {
  const innerVariant = variant == "pill"? "light" : variant;


  return(
    <div className="flex w-full flex-col">
      <NextTabs 
        aria-label="tabs" 
        items={tabList}
        disabledKeys={tabList.reduce<Array<string>>((cum, cur) => cur.disabled? [...cum, cur.id] : cum, [])}
        isDisabled={disabled}
        size={size}
        radius={rounded? "full" : radius}
        variant={innerVariant}
        selectedKey={activeTabId}
        color={color}
        onSelectionChange={(key: string) =>{
          onSwitchTab && onSwitchTab(key as string);
        }}
        classNames={{
          base: wrapperClassName,
          tab: clsx(
            "px-6 relative", 
            {"text-primary": color == "primary"},
            {"text-secondary": color == "secondary"},
            tabClassName
          ),
          tabContent: tabContentClassName,
          tabList: tabListClassName,
          cursor: clsx(
            "border-1 border-solid rounded-lg font-semibold w-5/12 absolute right-7",
            {"rounded-3xl": variant == "pill"},
            {"border-primary": color == "primary"},
            {"border-secondary": color == "secondary"},
            cusror
          ),
        }}
      >
        {(item: { id: Key | null | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; href: string | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) =>(
          <Tab 
            key={item.id}
            title={item.label}
            href={item.href}
            className={clsx(
              "px-6 text-lg",
              styles.tab,
              Poppins.className
            )}
          >
            {item.content}
          </Tab>
        )}
      </NextTabs>
    </div>
  );
}

export default Tabs;
