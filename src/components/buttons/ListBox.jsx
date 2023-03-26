import { useCallback, useState } from "react";
import { Listbox } from "@headlessui/react";
import { Icon, Text } from "../index.js";
import clsx from "clsx";

const options = [
  { name: "Beni sec", id: 1 },
  { name: "Sec beni", id: 2 },
  { name: "Beni secersen mesut olurum", id: 3 },
  { name: "beni secmezsen vatan hainisin teroristsin", id: 4 },
  { name: "sec iste birini", id: 5 },
  { name: "erdogan erdogan erdogann", id: 6 },
  { name: "beni sectigin icin tesekkur ederim", id: 7 },
];
const ListBox = ({ placeholder }) => {
  const [selected, setSelected] = useState({});

  const select = useCallback(
    (e) => {
      if (e === selected) {
        setSelected({});
      } else {
        setSelected(e);
      }
    },
    [selected, setSelected]
  );

  return (
    <div className="relative mt-1">
      <Listbox value={selected} onChange={select} by={"id"}>
        <Listbox.Button className=" bg-gray-50 border-none rounded-md px-4 py-2 h-[52px] w-full text-gray-700 font-medium text-start">
          {({ open }) => (
            <div className="flex items-center justify-between">
              <Text
                className={clsx(" truncate capitalize", {
                  "text-gray-700 font-medium": !!selected?.name,
                  "text-gray-400 font-light": !!!selected?.name,
                })}
              >
                {selected?.name ?? placeholder}
              </Text>
              <Icon purpose={open ? "up" : "down"} className="pl-2 " />
            </div>
          )}
        </Listbox.Button>

        <Listbox.Options className="absolute right-0 overflow-auto max-h-40 mt-2 w-full origin-top-right  rounded bg-white shadow-lg z-10">
          {options.map((option) => (
            <Listbox.Option
              key={option.id}
              value={option}
              className={({ active, selected }) =>
                clsx(
                  {
                    "bg-gray-100 text-gray-700": active || selected,

                    "text-gray-500": !active,
                  },
                  "group flex w-full items-center rounded px-2 py-2 text-sm capitalize gap-2"
                )
              }
            >
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ListBox;
