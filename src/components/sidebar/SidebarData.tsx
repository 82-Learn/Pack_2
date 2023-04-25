import * as React from "react";
import { SidebarItem } from "./models/SidebarItem";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineHome } from "react-icons/ai";
import { BiTestTube } from "react-icons/bi";
import { FaCog } from "react-icons/fa";

export const SidebarData: SidebarItem[] = [
  {
    title: "Delivery",
    path: "/accounts",
    icon: <AiOutlineHome />,
    iconClosed: <AiFillCaretDown />,
    iconOpened: <AiFillCaretUp />,
  },
  {
    title: "Our Terms",
    path: "/terms",
    icon: <FaCog />,
  },
  {
    title: "About",
    path: "/about-us",
    icon: <BiTestTube />,
  },
  {
    title: "Contact",
    path: "/contact-us",
    icon: <BiTestTube />,
  },
];
