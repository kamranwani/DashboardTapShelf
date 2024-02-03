import { CiHome, CiShoppingCart } from "react-icons/ci";
import { MdOutlineInsertChart, MdOutlineAccountCircle } from "react-icons/md";
import { PiToolbox } from "react-icons/pi";
import { TbListCheck } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <CiHome fontSize={26} />,
  },
  {
    key: "inventory",
    label: "Inventory",
    path: "/inventory",
    icon: <CiShoppingCart fontSize={26} />,
  },
  {
    key: "reports",
    label: "Reports",
    path: "/reports",
    icon: <MdOutlineInsertChart fontSize={26} />,
  },
  {
    key: "suppliers",
    label: "Suppliers",
    path: "/suppliers",
    icon: <MdOutlineAccountCircle fontSize={26} />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <PiToolbox fontSize={26} />,
  },
  {
    key: "managestore",
    label: "Manage Store",
    path: "/managestore",
    icon: <TbListCheck fontSize={26} />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline fontSize={26} />,
  },
];
