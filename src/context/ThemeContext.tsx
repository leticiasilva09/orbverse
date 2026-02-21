import React, { createContext, useContext, useState, useMemo } from "react";

type ThemeType = "dark" | "light";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

return (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
);
};

export const useTheme = () => useContext(ThemeContext);