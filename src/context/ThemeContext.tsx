import { createContext } from "react";
import { type themeColorType } from "../types/themeColorType";

export const ThemeContext = createContext<themeColorType>("dark");
