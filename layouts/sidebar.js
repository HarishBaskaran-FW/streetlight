import React, { useState } from "react";
import Link from "next/link";
import { fontSize, typeColor } from "../components/configuration/config";
import Logo from "@/components/logo";

const container_styles = (isCollapsed) =>
  `bg-sky-600 h-auto h-full border-r-2 border-gray-300 transition-all duration-300 ${
    isCollapsed ? "w-16" : "w-56"
  }`;
const ul_styles = `flex flex-col`;
const li_styles = `ml-[3px] pl-[7px] py-1 w-[97%] flex flex-row gap-2 grow hover:bg-sky-400 group hover:rounded hover:cursor-pointer`;
const icon_styles = `text-white bg-sky-600 px-1 group-hover:bg-sky-400 group-hover:cursor-pointer`;
const span_styles = `block px-1 py-1 w-full group-hover:bg-sky-400`;

const Sidebar = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  let size = fontSize(props.size);
  let type = typeColor(props.type);

  const renderSubMenu = (subMenu) => {
    return (
      <div className="border-t-[2px] border-solid">
        <ul className={`pl-[20px] pt-[10px]  ${ul_styles}`}>
          {subMenu.map((item, index) => (
            <li key={index} className={`w-[90%] ${li_styles}`}>
              {item.icon && (
                <Logo icon={item.icon} className={`${icon_styles}`} message={isCollapsed ? item.title : ''}/>
              )}
              {!isCollapsed && (
                <Link href={item.path} legacyBehavior passHref>
                  <a
                    className={`${span_styles} ${size} ${type} ${props.className}`}
                  >
                    {item.title}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={`${container_styles(isCollapsed)}`}>
      <div className="flex justify-end">
        <button
          onClick={toggleSidebar}
          className="text-white bg-sky-700 px-2 py-1 justify-last hover:bg-sky-500 transition-all duration-300"
        >
          {isCollapsed ? ">>" : "<<"}
        </button>
      </div>
      <ul className={`${ul_styles}`}>
        {props.menuItems.map((item, index) => (
          <>
            <li key={index} className={`${li_styles} `}>
              {item.icon && (
                <Logo icon={item.icon} className={`${icon_styles}`} message={isCollapsed ? item.title : '' }/>
              )}
              {!isCollapsed && (
                <Link href={item.path} legacyBehavior passHref>
                  <a
                    className={`${span_styles} ${size} ${type} ${props.className}`}
                  >
                    {item.title}
                  </a>
                </Link>
              )}
            </li>

            {item.subMenu && renderSubMenu(item.subMenu,isCollapsed)}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
