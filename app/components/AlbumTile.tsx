import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

type AlbumTileProps = {
  title: string;
  artist: string;
  image: ImageSourcePropType;
  style?: ViewStyle;
  onPress?: () => void; 
};

export default function AlbumTile({ title, artist, image, style }: AlbumTileProps) {
  const { styles: themeStyles, isDark } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => console.log('pressed')}
      activeOpacity={0.7}
      style={[
        styles.container,
        { backgroundColor: isDark ? "#000" : "#fff" },
        style,
      ]}
    >
        <View style={[styles.container, { backgroundColor: isDark ? "#000" : "#fff" }, style]}>
        <Image source={image} style={styles.image} resizeMode="cover" />
        <View style={styles.textContainer}>
            <Text
            style={[
                themeStyles.body,
                { fontSize: 14, fontWeight: "500", color: themeStyles.body.color, marginBottom: 2 },
            ]}
            numberOfLines={1}
            >
            {title}
            </Text>
            <Text
            style={[
                themeStyles.caption,
                { fontSize: 11, color: themeStyles.caption.color },
            ]}
            numberOfLines={1}
            >
            {artist}
            </Text>
        </View>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 183,
    height: 234,
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textContainer: {
    paddingHorizontal: "5%",
    paddingTop: "5%",
  },
});
