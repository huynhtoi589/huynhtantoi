import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const theme = {
    darkMode,
    toggleTheme,
    styles: {
      backgroundColor: darkMode ? "#1a202c" : "#f8f9fa",
      color: darkMode ? "#f8f9fa" : "#1a202c",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
