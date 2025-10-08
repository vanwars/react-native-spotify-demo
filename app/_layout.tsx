import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function ThemedStack() {
  const { colors } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerTitle: "Spotify Demo",
        headerStyle: { backgroundColor: colors.primaryLight },
        headerTintColor: "#000",
        contentStyle: { backgroundColor: colors.background },
      }}
    />
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedStack />
    </ThemeProvider>
  );
}
