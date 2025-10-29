import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type WideTileProps = {
  title: string;
  image: ImageSourcePropType;
  width?: number;
  height?: number;
  bgColor?: string;
  style?: ViewStyle;
};

export default function WideTile({
  title = "Alex Warren Mix",
  image = { uri: "https://placehold.co/55x55" },
  width = "140%",
  height = 45,
  bgColor = "#292929",
  style,
}: WideTileProps) {
  return (
    <View
      style={[
        styles.container,
        { width, height, backgroundColor: bgColor, borderRadius: 5 },
        style,
      ]}
    >
      <Image
        source={image}
        style={[
          styles.thumb,
          {
            width: height,
            height,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
          },
        ]}
        resizeMode="cover"
      />
        
      <Text
        style={styles.title}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.85}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    overflow: "hidden",
    justifyContent: "center",
  },
  thumb: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  title: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
});
