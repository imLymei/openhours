import { IconType } from "react-icons";
import packageData from "../../package.json";
import { AiFillHome } from "react-icons/ai";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegCalendar,
  FaUser,
} from "react-icons/fa6";

export const APP = {
  name: "OpenHours",
  version: packageData.version,
  description: "A simple Open-Source Hours manager",
};

const BASE_ICONS_SIZE = 12;
export const ICON_SIZES = {
  EXTRA_SMALL: BASE_ICONS_SIZE * 0.5,
  SMALL: BASE_ICONS_SIZE,
  MEDIUM: BASE_ICONS_SIZE * 1.25,
  LARGE: BASE_ICONS_SIZE * 1.5,
  EXTRA_LARGE: BASE_ICONS_SIZE * 2,
};

export const ICONS = {
  ARROW_LEFT: FaArrowLeft,
  ARROW_RIGHT: FaArrowRight,
};

type NavbarLink = {
  title: string;
  href: string;
  icon: IconType;
};
export const NAVBAR_LINKS: NavbarLink[] = [
  { title: "Calendar", href: "/calendar", icon: FaRegCalendar },
  { title: "Home", href: "/", icon: AiFillHome },
  { title: "Profile", href: "/profile", icon: FaUser },
];
