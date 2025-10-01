import * as SystemUI from 'expo-system-ui';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { colors, createStyles } from '../theme';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  colors: typeof colors.light;
  styles: ReturnType<typeof createStyles>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeColors = isDark ? colors.dark : colors.light;
  const themeStyles = createStyles(isDark);

  useEffect(() => {
    // Update status bar style based on theme
    SystemUI.setBackgroundColorAsync(themeColors.background);
  }, [isDark, themeColors.background]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors: themeColors, styles: themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
