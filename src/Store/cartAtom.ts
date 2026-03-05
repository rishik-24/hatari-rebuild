import { atom } from "jotai";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  isVeg: boolean;
  customized?: string;
};

export const cartAtom = atom<CartItem[]>([]);
