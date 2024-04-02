import { Chip, Link, Image } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="w-screen bg-primary md:h-[400px] pl-5 md:pl-[100px] pb-8 pr-8 pt-14 space-y-10 mb-0 z-10">
      <div className="w-full flex flex-row items-start justify-between md:justify-start gap-24">
        <Chip className="bg-gray h-[50px] p-0">
          <Image width={100} height={150} src="/images/north.png" />
        </Chip>
        <div className="w-1/4 hidden md:flex text-white tex-xs font-light">
          <p className="">
          North Devon Recruitment is the trusted and best recruitment agency
            to associate with.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 text-white  text-sm md:text-base">
          <div className="font-semibold text-white">Quick Links</div>
          <Link href="/" className="text-white cursor-pointer">
            Home
          </Link>
          <Link href="/about-us" className="text-white cursor-pointer">
            About Us
          </Link>
          <Link href="/our-services" className="text-white cursor-pointer">
            Services
          </Link>
          <Link href="/vacancies" className="text-white cursor-pointer">
            Vacancies
          </Link>
        </div>
        <div className="hidden md:flex flex-col items-start justify-start gap-2 text-white">
          <div className="font-semibold text-white">FaQ and Terms</div>
          <Link className="text-white cursor-pointer">FaQs</Link>
          <Link className="text-white cursor-pointer">Privacy & Policy</Link>
          <Link href="#" className="text-white cursor-pointer">
            Terms & Conditions
          </Link>
        </div>
      </div>

      <div className="flex flex-row items-start justify-end md:justify-between text-white pl-5 text-sm md:text-lg">
        <div className="hidden  md:flex flex-col items-start justify-start gap-2">
          <p className="font-semibold">Contact</p>
          <p className="text-gray font-light text-sm">
          Mail: operationsmanager@northdevonrecruitment
          </p>
          <p className="text-gray font-light text-sm">Call: +1 972 500 4545</p>
        </div>
        <div className="mb-0 flex flex-col items-end pt-7  justify-end text-white text-sm gap-2">
          <div>@2024 Copyright North Devon Recruitment</div>
          <div>22 Falcons Drive, SpringField, MK6 3HJ</div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
