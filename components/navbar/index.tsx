import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../button";

function Navbar() {
  return (
    <header className="w-full absolute z-10">
      <nav className="px-6 py-4 mx-auto max-w-[1440px] flex items-center justify-between sm:px-16">
        <Link href="/" className="flex items-center justify-center">
          <Image src="/logo.svg" alt="logo" className="object-contain" width={118} height={18} />
        </Link>

        <Button title="Sign In" containerStyles="min-w-[130px] bg-white text-primary-blue rounded-full" />
      </nav>
    </header>
  );
}

export default Navbar;
