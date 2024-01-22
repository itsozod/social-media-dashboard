import { useContext } from "react";
import { DarkTheme } from "./ThemeProvider";
export const useDarkmode = () => {
  return useContext(DarkTheme);
};
