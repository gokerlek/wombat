import * as React from "react";
import { NavLink } from "react-router-dom";
import { Text } from "./index.js";
import clsx from "clsx";
import paths from "../paths.js";

const NavLinks = () => {
  const linkBaseClassName = (isActive, disabled) =>
    clsx(" flex flex-row items-center justify-start gap-3 h-8 px-2 text-xs ", {
      "bg-pGray-300 text-pGray-700": isActive,
      "text-pGray-600": !isActive,
      "  hover:text-pGray-700 hover:bg-pGray-300 cursor-pointer": !disabled,
      "text-pGray-650 cursor-not-allowed line-through": disabled,
    });

  const labelClassName = (disabled) =>
    clsx(" h-full w-full items-center flex", {
      "animate-translate": !disabled,
    });

  return (
    <ul className="flex flex-col gap-2 mt-4">
      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive)}
          to={paths.firmProfile}
        >
          <Text className={labelClassName(false)}>Firm Profile</Text>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive)}
          to={paths.productManagement}
        >
          <Text className={labelClassName(false)}>Product Management</Text>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, false)}
          to={paths.ingredientOptions}
        >
          <Text className={labelClassName(false)}>Ingredient&Option</Text>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, true)}
          to={paths.pointComments}
        >
          <Text className={labelClassName(true)}>Point Comment</Text>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, true)}
          to={paths.createMenu}
        >
          <Text className={labelClassName(true)}>Create Menu</Text>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, true)}
          to={paths.deliveryOptions}
        >
          <Text className={labelClassName(true)}>Delivery Options</Text>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, true)}
          to={paths.advertisingManagement}
        >
          <Text className={labelClassName(true)}>Advertising Management</Text>
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) => linkBaseClassName(isActive, true)}
          to={paths.accounting}
        >
          <Text className={labelClassName(true)}>Accounting</Text>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
