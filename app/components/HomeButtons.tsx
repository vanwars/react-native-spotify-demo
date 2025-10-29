import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  bgColor?: string;
  selectedColor?: string;
};

export default function HomeButton({
  label,
  selected = false,
  onPress,
  bgColor = "#333333",
  selectedColor = "#1DB954", 
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        { backgroundColor: selected ? selectedColor : bgColor },
        pressed && styles.pressed,
      ]}
      android_ripple={{ color: "rgba(255,255,255,0.15)", borderless: false }}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={label}
    >
      <Text
        style={styles.label}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.85}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",

    elevation: 2, 
    shadowColor: "#000", 
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.95,
  },
  label: {
    color: "white",
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 16,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
