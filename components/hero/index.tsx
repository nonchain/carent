"use client"

import Image from "next/image";
import Button from "../button";

function HeroSection() {
  const onScrollHandler = () => {};
  return (
    <div className="hero">
      <div className="pt-36 padding-x flex-1">
        <h1 className="hero__title">Find, book, or rent a car -- quickly and easily</h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <Button
          title="Explore Cars"
          onClick={onScrollHandler}
          containerStyles="mt-10 bg-primary-blue text-white rounded-full"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero-image" fill className="object-contain"/>

          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
