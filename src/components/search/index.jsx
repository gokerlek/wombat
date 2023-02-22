import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { Icon } from "../index.js";
import clsx from "clsx";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
  { id: 11, name: "Maria Howell" },
  { id: 12, name: "Lew Christiansen" },
  { id: 13, name: "Daphney Armstrong" },
  { id: 14, name: "Bradly Fay" },
  { id: 15, name: "Noemie Little" },
];

export default function SearchBar() {
  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative">
          <div
            className={clsx(
              "relative flex items-center bg-gray-50 w-[400px] min-w-[200px] cursor-default overflow-hidden rounded-lg  h-[52px] text-left  focus:outline-none ",
              {
                "shadow-lg": open,
              }
            )}
          >
            <Icon purpose="search" className="px-4" />
            <Combobox.Input
              className="w-full border-none py-2 pl-0  h-full text-sm leading-5 text-gray-500 focus:ring-0 bg-transparent"
              displayValue={(person) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto shadow-lg rounded-md bg-gray-50 py-1 text-base  focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-gray-100 text-600" : "text-gray-500"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.name}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      )}
    </Combobox>
  );
}
