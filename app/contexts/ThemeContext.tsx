import * as SystemUI from "expo-system-ui";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { StatusBar, useColorScheme } from "react-native";
import { colors, createStyles } from "../theme";

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
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === "dark");

  const followSystem = true;

  useEffect(() => {
    if (followSystem && systemColorScheme)
      setIsDark(systemColorScheme === "dark");
  }, [systemColorScheme]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeColors = useMemo(
    () => (isDark ? colors.dark : colors.light),
    [isDark]
  );
  const themeStyles = useMemo(() => createStyles(isDark), [isDark]);

  useEffect(() => {
    // Update status bar style based on theme
    SystemUI.setBackgroundColorAsync(themeColors.background);
  }, [isDark, themeColors.background]);

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme, colors: themeColors, styles: themeStyles }}
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={themeColors.background}
      />
      {children}
    </ThemeContext.Provider>
  );
};
