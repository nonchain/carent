import { CarProps } from "@/components/car-card/type/index.type";

export interface CarDetailsCardProps {
  isOpen: boolean;
  car: CarProps;
  onCloseModal: () => void;
}