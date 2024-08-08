import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [light, setLight] = useState({ text: "#555", ui: "#ddd", bg: "#eee" });
  const [dark, setDark] = useState({ text: "#ddd", ui: "#333", bg: "#555" });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
