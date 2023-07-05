"use client";

import Image from "next/image";
import { ButtonProps } from "./types/index.type";

function Button({ title, containerStyles, type = "button", onClick, rightIcon, isDisable = false }: ButtonProps) {
  return (
    <button disabled={isDisable} type={type} className={`custom-btn ${containerStyles}`} onClick={onClick}>
      <span className={`flex-1`}>{title}</span>
      {rightIcon ? (
        <div className="w-6 h-6 relative">
          <Image src={`/${rightIcon}`} alt="right-icon" fill className="object-contain" />
        </div>
      ) : null}
    </button>
  );
}

export default Button;
