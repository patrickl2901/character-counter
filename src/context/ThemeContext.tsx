import { createContext } from "react";
import { themeColorType } from "../types/themeColorType";

export const ThemeContext = createContext<themeColorType>("dark");
