import React, { createContext, useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { themeLight, themeDark } from '../../lib/theme';

const ThemeContext = createContext({
  isDark: false,
  theme: {},
  toggleDark: () => {},
});

const DarkThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [theme, setTheme] = useState(themeDark);

  useEffect(() => {
    let theme = isDark ? themeDark : themeLight;
    setTheme(theme);
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        theme,
        toggleDark,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { DarkThemeProvider };
