import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import dark from '../theme/dark';

interface ThemeContextInterface {
  toggleTheme: () => void;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextInterface);

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
