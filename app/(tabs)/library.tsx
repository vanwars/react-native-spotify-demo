import { Text, View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function Library() {
  const { styles } = useTheme();
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.heading}>Your Library</Text>
      <Text style={styles.caption}>Coming soon…</Text>
    </View>
  );
}
