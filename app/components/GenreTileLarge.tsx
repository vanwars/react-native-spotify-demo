import React from "react";
import {
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  title?: string;
  bgColor?: string;
  image?: ImageSourcePropType;
  style?: ViewStyle;
  onPress?: () => void;
};

export default function GenreTileLarge({
  title = "Pop",
  bgColor = "#9854b2",
  image,
  style,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: bgColor,
          opacity: pressed ? 0.96 : 1,
          transform: [{ scale: pressed ? 0.98 : 1 }],
        },
        style,
      ]}
    >
      <View style={[styles.container, { backgroundColor: bgColor }, style]}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <View style={styles.diagonalCard}>
          <Text style={styles.diagonalText}>Album</Text>
        </View>

        {image ? <Image source={image} style={styles.albumImage} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 190, //229.43 prev.
    height: 115, //87.14 prev.
    position: "relative",
    overflow: "hidden",
    borderRadius: 4,
  },

  title: {
    position: "absolute",
    left: 16.13,
    top: 16.08,
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  diagonalCard: {
    position: "absolute",
    left: 140, //190.02 prev.
    top: 40,
    width: 70,
    height: 70,
    backgroundColor: "#1f1f21",
    borderRadius: 2,
    transform: [{ rotate: "23deg" }],
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowOffset: { width: -1, height: 2 },
        shadowRadius: 3,
      },
      android: { elevation: 3 },
    }),
  },

  diagonalText: {
    position: "absolute",
    left: 21.4,
    top: 31,
    width: 56.44,
    height: 38.8,
    transform: [{ rotate: "2deg" }],
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    // fontFamily: 'Avenir Next',
  },

  albumImage: {
    position: "absolute",
    left: 130, //180.95 prev.
    top: 30, //-1.43 prev.
    width: 70, //81.44 prev.
    height: 70,
    transform: [{ rotate: "24deg" }],
    borderRadius: 5,
  },
});
