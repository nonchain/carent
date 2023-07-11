"use client";

// Libraries
import React from "react";
// Components
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
// TS Configs
import { CarDetailsCardProps } from "./type/index.type";
import { CarProps } from "../car-card/type/index.type";

function CarDetailsCard({ isOpen, car, onCloseModal }: CarDetailsCardProps) {
  return (
    <React.Fragment>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onCloseModal}>
          {/* OVERLAY */}
          <Transition.Child
            as={React.Fragment}
            enterFrom="opacity-0"
            enterTo="opacity-100"
            enter="ease-out duration-300"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25"></div>
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="p-4 min-h-full flex items-center justify-center text-center">
              <Transition.Child
                as={React.Fragment}
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                enter="ease-out duration-300"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="p-6 w-full max-w-lg max-h-[90vh] bg-white rounded-lg flex flex-col text-left relative transform transition-all shadow-lg">
                  <button
                    type="button"
                    onClick={onCloseModal}
                    className="p-2 w-fit bg-primary-blue-100 rounded-full absolute top-2 right-2 z-10"
                  >
                    <Image src="/close.svg" alt="close" width={20} height={20} className="object-contain" />
                  </button>

                  <div className="flex flex-1 flex-col gap-3">
                    <div className="w-full h-40 bg-pattern bg-cover bg-center relative rounded-md">
                      <Image src="/hero.png" alt="car image" fill priority className="object-contain" />
                    </div>

                    <div className="flex gap-3">
                      <div className="w-full h-24 bg-primary-blue-100 rounded-md flex-1 relative">
                        <Image src="/hero.png" alt="car image" fill priority className="object-contain" />
                      </div>
                      <div className="w-full h-24 bg-primary-blue-100 rounded-md flex-1 relative">
                        <Image src="/hero.png" alt="car image" fill priority className="object-contain" />
                      </div>
                      <div className="w-full h-24 bg-primary-blue-100 rounded-md flex-1 relative">
                        <Image src="/hero.png" alt="car image" fill priority className="object-contain" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 h-full flex flex-col gap-2 overflow-y-auto">
                    <h2 className="text-xl font-semibold capitalize">
                      {car.make} {car.model}
                    </h2>

                    <ul className="pr-2 mt-3 h-full flex flex-col gap-4 overflow-y-auto">
                      {Object.entries(car).map(([key, value]) => (
                        <li
                          key={key}
                          className="p-1 flex items-center justify-between rounded"
                        >
                          <h4 className="text-gray-500 capitalize">{key.replace("_", " ")}</h4>
                          <p className="text-black-100 font-semibold">{value}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </React.Fragment>
  );
}

export default CarDetailsCard;
