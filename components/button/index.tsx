"use client";

import Image from "next/image";
import { ButtonProps } from "./types/index.type";

function Button({title, containerStyles, onClick}: ButtonProps) {
  return (
    <button disabled={false} type={"button"} className={`custom-btn ${containerStyles}`} onClick={onClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default Button;
