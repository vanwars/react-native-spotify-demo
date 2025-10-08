import { Text, View } from "react-native";
import GenreTile from "../components/GenreTile";
import { useTheme } from "../contexts/ThemeContext";

export default function Search() {
  const { styles } = useTheme();
  return (
    <View style={styles.centeredContainer}>
      <Text style={styles.heading}>Search</Text>

      <GenreTile
        title="Pop"
        bgColor="#9854b2"
        image={require("../../assets/images/alex_warren.jpg")}
        onPress={() => console.log("Pressed!")}
      />
      <Text> </Text>
      <GenreTile
        title="Jazz"
        bgColor="#9854b2"
        image={require("../../assets/images/alex_warren.jpg")}
      />
      <Text> </Text>
      <GenreTile
        title="Others"
        bgColor="#9854b2"
        image={require("../../assets/images/alex_warren.jpg")}
      />
    </View>
  );
}
