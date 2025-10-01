import { Stack } from "expo-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import { colors } from "./theme";


export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerTitle: "Spotify Demo",
          headerStyle: { backgroundColor: colors.dark.primaryLight },
          headerTintColor: '#fff',
        }}
      />
    </ThemeProvider>
  );
}
