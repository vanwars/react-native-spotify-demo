import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { openCamera } from "../components/Camera";
import MusicCard from "../components/DiscoverTile";
import GenreTile from "../components/GenreTile";
import GenreTileLarge from "../components/GenreTileLarge";
import SearchBar from "../components/SearchBar";
import { useTheme } from "../contexts/ThemeContext";

export default function Search() {
  const { styles } = useTheme();

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingBottom: 0,
        alignItems: "stretch",
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.centeredContainer}>
        <View
          style={[
            styles.headerRow,
            {
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              marginBottom: 8,
            },
          ]}
        >
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
            <Text style={styles.heading}>Search</Text>
          </View>
          <TouchableOpacity onPress={openCamera}>
            <Ionicons
              name="camera-outline"
              size={26}
              color="#a1a1a1ff"
              onPress={openCamera}
            />
          </TouchableOpacity>
        </View>

        <SearchBar
          placeholder="What do you want to listen to?"
          onSubmit={() => {
            console.log("Search entered");
          }}
          icon={<Ionicons name="search" size={20} color="#000000ff" />}
          bgColor="#ffffffff"
        />

        <Text
          style={[
            styles.subheading,
            {
              alignSelf: "flex-start",
              textAlign: "left",
              // paddingHorizontal: 16,
              marginTop: 0,
              marginBottom: 8,
            },
          ]}
        >
          Start browsing
        </Text>

        <View style={{ width: "100%", paddingHorizontal: 5 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              columnGap: 65,
            }}
          >
            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTile
                title="Pop"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
                onPress={() => console.log("Pressed!")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 5 }}>
              <GenreTile
                title="Jazz"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 5 }}>
              <GenreTile
                title="Country"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 5 }}>
              <GenreTile
                title="Others"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>
          </View>
        </View>

        <Text
          style={[
            styles.subheading,
            {
              alignSelf: "flex-start",
              textAlign: "left",
              marginTop: 10,
              marginBottom: 8,
            },
          ]}
        >
          Discover something new
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 20,
          }}
        >
          <MusicCard
            title="Music for you"
            videoUri="https://cdn.pixabay.com/video/2025/01/10/251873_large.mp4"
          />
          <MusicCard
            title="Trending now"
            videoUri="https://cdn.pixabay.com/video/2025/03/18/265815_large.mp4"
          />
          <MusicCard
            title="Podcasts for you"
            videoUri="https://cdn.pixabay.com/video/2021/11/24/98814-650523105_large.mp4"
          />
        </View>

        <Text
          style={[
            styles.subheading,
            {
              alignSelf: "flex-start",
              textAlign: "left",
              marginTop: 10,
              marginBottom: 8,
            },
          ]}
        >
          Browse all
        </Text>

        <View style={{ width: "100%", paddingHorizontal: 5 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              columnGap: 65,
            }}
          >
            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Made For You"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
                onPress={() => console.log("Pressed!")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Upcoming Releases"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="New Releases"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Country"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Hip-Hop"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Pop"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Latin"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Charts"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Podcast Charts"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>

            <View style={{ width: "35%", marginBottom: 10 }}>
              <GenreTileLarge
                title="Others"
                bgColor="#9854b2"
                image={require("../../assets/images/alex_warren.jpg")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
