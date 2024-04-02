import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Image,
} from "@nextui-org/react";
import Tabs from "@/components/Tabs/index";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/Button/index";

const TABS = [
  {
    id: "/",
    label: "Home",
  },
  {
    id: "about-us",
    label: "About Us",
  },
  {
    id: "our-services",
    label: "Our Services",
  },
  {
    id: "vacancies",
    label: "Vacancies",
  },
  {
    id: "contact-us",
    label: "",
  },
];

export default function NextBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/");
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Our Services", path: "/our-services" },
    { name: "Vacancies", path: "/vacancies" },
  ];

  return (
    <div className="bg-gray flex flex-row items-center justify-between rounded-full px-10 py-0 h-[80px] z-30 absolute top-[15%] left-1 right-1 lg:right-10 lg:left-10 mx-auto">
      <Navbar
        classNames={{
          base: ["bg-gray"],
        }}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        position="sticky"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden "
          />
          <NavbarBrand className="justify-end">
            <Image
              width={100}
              height={100}
              src="/images/north.png"
              alt="logo"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem>
            <Tabs
              wrapperClassName="mx-auto"
              tabList={TABS.map((tab) => ({
                id: tab.id,
                label: tab.label,
              }))}
              // ta="text-xs"
              cusror={`${activeTab === "contact-us" ? "hidden" : "visible"}`}
              size="sm"
              color="primary"
              activeTabId={activeTab}
              onSwitchTab={(activeTab) => {
                router.push(activeTab);
                setActiveTab(activeTab);
              }}
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden md:flex">
          <NavbarItem>
            <Button
              rounded
              variant={`${
                activeTab === "contact-us" ? "solid" : "outlined-solid"
              }`}
              size="lg"
              className=""
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="w-[96%] mx-auto mt-[120px] rounded-2xl">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              isActive={pathname === item.path}
              className=""
              key={`${item}-${index}`}
            >
              <Link
                // color={
                //   index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                // }
                className={`w-full ${
                  pathname === item.path ? "text-primary" : "text-secondary"
                }`}
                href={item.path}
                // size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
