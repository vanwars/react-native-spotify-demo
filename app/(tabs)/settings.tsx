import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function settings() {
  const { isDark, toggleTheme, styles } = useTheme();

  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.heading}>Dark Mode Toggle</Text>
      <Text style={styles.caption}>
        Current theme: {isDark ? "Dark" : "Light"}
      </Text>

      <TouchableOpacity style={styles.primaryButton} onPress={toggleTheme}>
        <Text style={styles.primaryButtonText}>
          Toggle {isDark ? "Light" : "Dark"} Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}
