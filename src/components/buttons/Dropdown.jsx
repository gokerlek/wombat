/**
 *  const options = [
 *     { label: "Edit details", action: () => console.log("edit") },
 *     { label: "Archive", action: () => console.log("archive") },
 *     { label: "Clear all history", action: () => console.log("clear") },
 *     { label: "Delete project", action: () => console.log("delete") },
 *   ];
 */

import { Listbox } from "@headlessui/react";
import { Icon, Text } from "../index.js";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { JOB_STATUS } from "../../constants.js";

const Dropdown = ({ options, status }) => {
  const [selectedItem, setSelectedItem] = useState(status);

  return (
    <Listbox
      value={selectedItem}
      onChange={setSelectedItem}
      as="div"
      by={"label"}
      className={clsx("relative h-10 w-fit bg-cyan-500 rounded-lg", {
        "bg-cyan-500": selectedItem?.label === JOB_STATUS.PUBLISHED,
        "bg-rose-500": selectedItem?.label === JOB_STATUS.CLOSED,
        "bg-gray-400": selectedItem?.label === JOB_STATUS.ARCHIVED,
      })}
    >
      <Listbox.Button
        onClick={(e) => e.stopPropagation()}
        className="flex  items-center h-full p-3 text-white"
      >
        <Icon
          className="flex h-full items-center cursor-pointer text-white"
          purpose={options[0]?.icon ?? "more"}
        />
        <Text className="px-2 pr-3 text-white border-r border-white capitalize">
          {selectedItem?.label}
        </Text>

        <Icon purpose={open ? "up" : "down"} className="pl-2" />
      </Listbox.Button>

      <Listbox.Options className="absolute -right-2 mt-2 w-44 origin-top-right border border-border rounded-lg bg-white shadow-lg z-10">
        <div className="px-2 py-3 ">
          {options.map((option) => (
            <Listbox.Option key={option.id} value={option} as={Fragment}>
              {({ active, selected }) => (
                <button
                  onClick={option?.action}
                  className={clsx(
                    {
                      "bg-gray-100 text-gray-700": active || selected,

                      "text-gray-500": !active,
                    },
                    "group flex w-full items-center rounded px-2 py-2 text-xs capitalize gap-2"
                  )}
                >
                  <Icon purpose={option?.icon ?? "more"} />
                  <Text>{option?.label}</Text>
                </button>
              )}
            </Listbox.Option>
          ))}
        </div>
      </Listbox.Options>
    </Listbox>
  );
};

export default Dropdown;
