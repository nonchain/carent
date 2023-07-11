"use client";

// Libraries
import { useState } from "react";
// Components
import Button from "../button";
// TS Configs
import { CarProps } from "./type/index.type";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import CarDetailsCard from "../car-details-card";

interface CarCardProps {
  car: CarProps;
}

function CarCard({ car }: CarCardProps) {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="mt-6 text-[32px] font-extrabold flex">
        <span className="text-sm font-semibold self-start">$</span>
        {carRent}
        <span className="text-sm font-medium self-end">/day</span>
      </p>

      <div className="my-3 w-full h-40 relative object-contain">
        <Image src="/hero.png" alt="car image" fill priority className="object-contain" />
      </div>

      <div className="mt-2 w-full relative cursor-pointer">
        <div className="w-full flex justify-between text-gray group-hover:invisible duration-50">
          {/* INFO */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" alt="steering" width={20} height={20} />
            <p className="text-sm">{transmission === "a" ? "Automatic" : "Manual"}</p>
          </div>
          {/* INFO */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-sm">{drive.toUpperCase()}</p>
          </div>
          {/* INFO */}
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-sm">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Button
            title="View details"
            containerStyles="py-4 w-full bg-primary-blue text-white text-sm font-bold rounded-lg"
            rightIcon="right-arrow.svg"
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <CarDetailsCard isOpen={isModalOpen} car={car} onCloseModal={() => setIsModalOpen(false)} />
    </div>
  );
}

export default CarCard;
