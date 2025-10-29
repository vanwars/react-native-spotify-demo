import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AlbumTile from "../components/AlbumTile";
import HomeButton from "../components/HomeButtons";
import WideTile from "../components/WideTile";
import { useTheme } from "../contexts/ThemeContext";

export default function Index() {
  const { styles: themeStyles, isDark } = useTheme();
  const [selected, setSelected] = useState<string>("All");

  const options = [
    "All",
    "Favorites",
    "Podcasts",
    "Recently Played",
    "Trending",
    "New Releases",
    "Top Charts",
    "Recommended",
  ];

  const mixes = [
    { title: "DJ", image: require("../../assets/images/react-logo.png") },
    { title: "Pop Drive", image: require("../../assets/images/react-logo.png") },
    { title: "Chill Vibes", image: require("../../assets/images/react-logo.png") },
    { title: "Top Charts", image: require("../../assets/images/react-logo.png") },
    { title: "Liked Songs", image: require("../../assets/images/react-logo.png") },
    { title: "Upbeat Mix", image: require("../../assets/images/react-logo.png") },
    { title: "Autumn Mix", image: require("../../assets/images/react-logo.png") },
    { title: "Cardi B", image: require("../../assets/images/react-logo.png") },
  ];

  const albums = [
  {
    title: "Hard Candy Christmas",
    artist: "Hayden Joseph",
    image: require("../../assets/images/HaydenJoseph .jpg"),
  },
  {
    title: "Hard Candy Christmas",
    artist: "Hayden Joseph",
    image: require("../../assets/images/HaydenJoseph .jpg"),
  },
  {
    title: "Hard Candy Christmas",
    artist: "Hayden Joseph",
    image: require("../../assets/images/HaydenJoseph .jpg"),
  },
  
];

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={[themeStyles.centeredContainer, { paddingBottom: 24 }]}
    >
      <View style={[themeStyles.headerRow, styles.header]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/images/alex_warren.jpg")}
            style={{
              width: 39,
              height: 39,
              borderRadius: 100,
              marginRight: 12,
              marginBottom: 6,
            }}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        >
          {options.map((label) => (
            <View key={label} style={styles.buttonWrap}>
              <HomeButton
                label={label}
                selected={selected === label}
                onPress={() => setSelected(label)}
              />
            </View>
          ))}
        </ScrollView>
      </View>

    
      <View style={{ width: "100%", paddingHorizontal: 5 }}>
        <View style={styles.tileGrid}>
          {mixes.map((mix, index) => (
            <View key={index} style={styles.tileWrap}>
              <WideTile title={mix.title} image={mix.image} />
            </View>
          ))}
        </View>
      </View>
      <Text
        style={[
          themeStyles.subheading,
          {
            alignSelf: "flex-start",
            textAlign: "left",
            marginTop: 10,
            marginBottom: "-15%",
          },
        ]}
      >
        Jump back in
        </Text>
      
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          >
          {albums.map((a, i) => (
            <View key={`${a.title}-${i}`} style={styles.buttonWrap}>
              <AlbumTile {...a} style={{ marginRight: 12 }}
              onPress={() => console.log('pressed')} />
            </View>
          ))}
        </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginBottom: 8,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  buttonWrap: {
    marginRight: 10,
  },
  tileGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    columnGap: 65,
  },
  tileWrap: {
    width: "35%",
    marginBottom: 10,
  },
});
