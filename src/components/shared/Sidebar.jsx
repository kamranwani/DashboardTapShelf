import React from "react";
import {
  DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
} from "../../Utils/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <div className="bg-neutral-50 flex flex-col justify-between text-neutral-800 gap-4 w-72 p-4">
      <div className="toppart flex-1">
        <div className="logo mb-6 font-semibold text-xl text-blue-600">
          TapShelf
        </div>
        <nav className="list-none">
          {DASHBOARD_SIDEBAR_LINKS.map((link) => {
            return (
              <Link
                to={link.path}
                key={link.key}
                className={`${
                  pathname === link.path
                    ? "text-blue-600 flex items-center gap-3 mb-3 font-semibold p-1 "
                    : "text-neutral-500 flex items-center gap-3 mb-3 font-semibold hover:bg-neutral-100 hover:text-blue-600 rounded p-1"
                }`}
              >
                {link.icon} <span className="text-sm">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="bottompart flex-2">
        <nav className="list-none">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => {
            return (
              <Link
                to={link.path}
                key={link.key}
                className={`${
                  pathname === link.path
                    ? "text-blue-600 flex items-center gap-3 mb-8 font-semibold p-1 "
                    : "text-neutral-500 flex items-center gap-3 mb-8 font-semibold hover:bg-neutral-100 hover:text-blue-600  rounded p-1"
                }`}
              >
                {link.icon} <span className="text-sm">{link.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3 p-1 hover:bg-neutral-100 text-neutral-500 hover:text-red-500 font-semibold">
          <MdOutlineLogout fontSize={26} />
          <button className="border-none focus:outline-none focus:border-none text-sm">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
