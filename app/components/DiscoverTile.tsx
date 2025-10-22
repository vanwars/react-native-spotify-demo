import { ResizeMode, Video } from "expo-av";
import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MusicCard({ title, videoUri }) {
  const videoRef = useRef(null);
  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoUri }}
        style={styles.video}
        resizeMode={ResizeMode.COVER}
        isLooping
        shouldPlay
        isMuted
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: 230,
    position: "relative",
  },
  backgroundBox: {
    width: 130,
    height: 230,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    position: "absolute",
    left: 0,
    top: 0,
  },
  video: {
    width: 120,
    height: 230,
    position: "absolute",
    left: -2,
    top: 0,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
  text: {
    position: "absolute",
    left: 11,
    top: 200,
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
});
