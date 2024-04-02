import Button from "@/components/Button/index";
import Tabs from "@/components/Tabs/index";
import { Image } from "@nextui-org/react";

const NavBar = () => {
  return (
    <div className="bg-white flex flex-row items-center justify-between rounded-full px-10 py-0 h-[100px] z-30 absolute top-[20%] left-10 right-10 mx-auto">
      <Image width={250} height={250} src="/images/north.png" alt="logo" />
      <Tabs
        wrapperClassName="mx-auto"
        tabList={[
          {
            id: "tab_1",
            label: "Home",
          },
          {
            id: "tab_2",
            label: "About Us",
          },
          {
            id: "tab_3",
            label: "Our Services",
          },
          {
            id: "tab_4",
            label: "Vacancies",
          },
        ]}
        // ta="text-xs"
        size="sm"
        color="primary"
      />
      <Button rounded size="lg" className="w-[250px]">
        Contact Us
      </Button>
    </div>
  );
};

export default NavBar;
