import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../app/contexts/ThemeContext";

export default function Index() {
  const { isDark, toggleTheme, styles } = useTheme();

  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.heading}>Welcome to Spotify Demo</Text>
      <Text style={styles.caption}>
        Current theme: {isDark ? "Dark" : "Light"}
      </Text>

      {/* TouchableOpacity is a customizable button */}
      <TouchableOpacity style={styles.primaryButton} onPress={toggleTheme}>
        <Text style={styles.primaryButtonText}>
          Toggle {isDark ? "Light" : "Dark"} Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}
