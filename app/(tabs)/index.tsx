import { Text, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function Index() {
  const { isDark, toggleTheme, styles } = useTheme();

  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.heading}>Home</Text>
      <Text style={styles.caption}>Coming soon…</Text>
    </View>
  );
}
