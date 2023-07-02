"use client";

// Libraries
import { ChangeEvent, Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
// Components
import Image from "next/image";
// Files
import { manufacturers } from "@/constants";
// TS Configs
import { SearchBarManufactureProps } from "../types/index.type";

function SearchBarManufacture({ manufacture, setManufacture }: SearchBarManufactureProps) {
  const [query, setQuery] = useState("");

  const onComboboxDisplayValueHandler = (manufacturer: string) => manufacturer;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;
    setQuery(value);
  };

  const filteredManufacturersList =
    query === ""
      ? manufacturers
      : manufacturers.filter((manufacturer) =>
          manufacturer.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacture} onChange={setManufacture}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-3.5">
            <Image src="/car-logo.svg" alt="logo" width={20} height={20} className="ml-4" />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={onComboboxDisplayValueHandler}
            onChange={onChangeHandler}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturersList.length > 0 &&
                query.length !== 0 &&
                filteredManufacturersList?.map((manufacturer) => (
                  <Combobox.Option
                    key={manufacturer.toLowerCase()}
                    value={manufacturer}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-bold" : "font-medium"}`}>
                          {manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >+</span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default SearchBarManufacture;
