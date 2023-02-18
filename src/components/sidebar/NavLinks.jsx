import * as React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Text } from "../index.js";
import clsx from "clsx";
import { sidebarItems } from "../../constants.js";

const NavLinks = ({ isOpen }) => {
  const linkBaseClassName = (isActive, disabled) =>
    clsx(" flex flex-row items-center justify-start gap-2   capitalize ", {
      "text-cyan-600 font-semibold": isActive,
      "text-gray-800": !isActive,
      "hover:text-cyan-600 hover:font-semibold cursor-pointer": !disabled,
      "text-pGray-650 cursor-not-allowed line-through": disabled,
    });

  const labelClassName = (disabled) =>
    clsx(" h-full w-full items-center flex min-w-[160px]");

  return (
    <ul className="flex flex-col gap-7">
      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive)}
          to={sidebarItems[0].path}
        >
          {({ isActive }) => (
            <>
              <Icon
                purpose={sidebarItems[0][clsx("icon", { active: isActive })]}
              />
              {isOpen && (
                <Text className={labelClassName(false)}>
                  {sidebarItems[0].name}
                </Text>
              )}
            </>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive)}
          to={sidebarItems[1].path}
        >
          {({ isActive }) => (
            <>
              <Icon
                purpose={sidebarItems[1][clsx("icon", { active: isActive })]}
              />
              {isOpen && (
                <Text className={labelClassName(false)}>
                  {sidebarItems[1].name}
                </Text>
              )}
            </>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, false)}
          to={sidebarItems[2].path}
        >
          {({ isActive }) => (
            <>
              <Icon
                purpose={sidebarItems[2][clsx("icon", { active: isActive })]}
              />
              {isOpen && (
                <Text className={labelClassName(false)}>
                  {sidebarItems[2].name}
                </Text>
              )}
            </>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, false)}
          to={sidebarItems[3].path}
        >
          {({ isActive }) => (
            <>
              <Icon
                purpose={sidebarItems[3][clsx("icon", { active: isActive })]}
              />
              {isOpen && (
                <Text className={labelClassName(false)}>
                  {sidebarItems[3].name}
                </Text>
              )}
            </>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, false)}
          to={sidebarItems[4].path}
        >
          {({ isActive }) => (
            <>
              <Icon
                purpose={sidebarItems[4][clsx("icon", { active: isActive })]}
              />
              {isOpen && (
                <Text className={labelClassName(false)}>
                  {sidebarItems[4].name}
                </Text>
              )}
            </>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, false)}
          to={sidebarItems[5].path}
        >
          {({ isActive }) => (
            <>
              <Icon
                purpose={sidebarItems[5][clsx("icon", { active: isActive })]}
              />
              {isOpen && (
                <Text className={labelClassName(false)}>
                  {sidebarItems[5].name}
                </Text>
              )}
            </>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, false)}
          to={sidebarItems[6].path}
        >
          {({ isActive }) => (
            <>
              <Icon
                purpose={sidebarItems[6][clsx("icon", { active: isActive })]}
              />
              {isOpen && (
                <Text className={labelClassName(false)}>
                  {sidebarItems[6].name}
                </Text>
              )}
            </>
          )}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
