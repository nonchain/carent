import { SetStateAction } from "react";

export interface SearchBarManufactureProps {
  manufacture: string;
  setManufacture: (value: SetStateAction<string>) => void;
}