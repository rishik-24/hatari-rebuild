import { atom } from "jotai";

export type VegFilter = "veg" | "nonVeg";

export const vegFilterAtom = atom<VegFilter>("nonVeg");

