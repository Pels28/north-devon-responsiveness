import IconButton from "@/components/Button/IconButton";
import { FacebookIcon } from "@/icons/index";
import { Link } from "@nextui-org/react";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import { ImInstagram } from "react-icons/im";
import { IoMdMail } from "react-icons/io";

const TopBar = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start gap-10">
        <div className="flex flex-row items-center justify-start gap-3">
          <IoMdMail
            stroke="#E9722B"
            fill="#E9722B"
            className="w-7 h-7"
            color="primary"
          />
          {/* <Image src="/svg/EmailIcon.svg"/> */}
          <p className="text-xs">operations@northdevonrecruitment.com</p>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <BsTelephoneFill
            stroke="#E9722B"
            fill="#E9722B"
            className="w-5 h-7"
            color="primary"
          />
          <p className="text-xs">+(233) 597 986 097</p>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <GoClockFill
            stroke="#E9722B"
            fill="#E9722B"
            className="w-7 h-7"
            color="primary"
          />
          <p className="text-xs">Mon - Fri 9:30am - 5:30pm</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-0">
        <IconButton rounded variant="link" color="secondary">
          <Link
            isExternal
            href="https://www.facebook.com/profile.php?id=61554625350987&mibextid=LQQJ4d"
          >
            <FacebookIcon className="w-5 h-5" />
          </Link>
        </IconButton>

        <IconButton rounded variant="link" color="secondary">
          <Link
            isExternal
            href="https://www.instagram.com/p/C1B_jKvrmnK/?igshid=ZDE1MWVjZGVmZQ=="
          >
            <AiFillInstagram className="w-6 h-6" />
          </Link>
        </IconButton>
        
        <IconButton rounded variant="link" color="secondary">
          <Link
            isExternal
            href="https://youtube.com/@North_Devon?si=hACpn82PBwxHVpbo"
          >
            <AiFillYoutube className="w-6 h-6" />
          </Link>
        </IconButton>
        <IconButton rounded variant="link" color="secondary">
          <Link
            isExternal
            href="https://www.linkedin.com/company/northdevon/"
          >
            <AiFillLinkedin className="w-6 h-6" />
          </Link>
        </IconButton>
      </div>
    </div>
  );
};

export default TopBar;
