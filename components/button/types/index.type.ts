import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  type?: "button" | "submit" | "reset" | undefined;
  rightIcon?: string;
  isDisable?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
