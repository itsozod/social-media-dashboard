/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const DarkTheme = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));

  localStorage.setItem("theme", JSON.stringify(theme));
  const themeChange = () => {
    setTheme((prevTheme) => !prevTheme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  return (
    <>
      <DarkTheme.Provider value={[theme, themeChange]}>
        {children}
      </DarkTheme.Provider>
    </>
  );
};
