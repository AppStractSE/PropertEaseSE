import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => console.warn('No theme provider'),
  isDarkMode: false,
});

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    const isDarkTheme = !isDarkMode;
    document.documentElement.classList.toggle('dark', isDarkTheme);
    localStorage.theme = isDarkTheme ? 'dark' : 'light';
    setIsDarkMode(isDarkTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.theme;
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkTheme = storedTheme === 'dark' || (!storedTheme && prefersDarkScheme);

    document.documentElement.classList.toggle('dark', isDarkTheme);
    setIsDarkMode(isDarkTheme);
  }, []);

  return <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
