import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import { Icon, Text } from "../index.js";

const PublishDropDown = ({ publish, options }) => {
  return (
    <Menu
      as="div"
      className="relative  h-12 w-fit bg-cyan-500 rounded-lg bg-cyan-500 "
    >
      <div className="flex  items-center h-full  text-white">
        <Text
          onClick={publish}
          className="py-3 pl-5 pr-3 text-white rounded-l-lg border-r border-white capitalize hover:bg-cyan-600 cursor-pointer"
        >
          publish
        </Text>
        <Menu.Button className="hover:bg-cyan-600 rounded-r-lg h-full py-3 pr-3">
          {({ open }) => (
            <Icon purpose={open ? "up" : "down"} className="pl-2" />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-2 mt-2 w-56 origin-top-right border border-border rounded-lg bg-white shadow-lg z-10">
          <div className="px-2 py-3 ">
            {options.map((option) => (
              <Menu.Item key={option.id} value={option} as={Fragment}>
                {({ active }) => (
                  <button
                    className={clsx(
                      {
                        "bg-gray-100 text-gray-700": active,

                        "text-gray-500": !active,
                      },
                      "group flex w-full items-center rounded px-2 py-2 text-sm capitalize gap-2"
                    )}
                  >
                    <Icon purpose={option?.icon} />
                    <Text>{option?.label}</Text>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PublishDropDown;
