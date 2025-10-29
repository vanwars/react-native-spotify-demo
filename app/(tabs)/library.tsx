import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import SpotifySearchBar from "../components/SpotifySearchBar";
import TrackCard from "../components/TrackCard";
import { useTheme } from "../contexts/ThemeContext";
import { searchTracks, SpotifyTrack } from "../services/spotifyApi";

export default function Library() {
  const { styles, colors } = useTheme();
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (searchTerm: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const searchResults = await searchTracks(searchTerm);
      setTracks(searchResults);
    } catch (error) {
      console.error('Search error:', error);
      Alert.alert(
        'Search Error',
        'Failed to search for tracks. Please check your internet connection and try again.',
        [{ text: 'OK' }]
      );
      setTracks([]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderTrack = ({ item }: { item: SpotifyTrack }) => (
    <TrackCard track={item} />
  );

  const renderEmptyState = () => {
    if (isLoading) {
      return (
        <View style={emptyStyles.container}>
          <Text style={emptyStyles.text}>Searching for tracks...</Text>
        </View>
      );
    }

    if (hasSearched && tracks.length === 0) {
      return (
        <View style={emptyStyles.container}>
          <Text style={emptyStyles.text}>No tracks found</Text>
          <Text style={emptyStyles.subtext}>Try a different search term</Text>
        </View>
      );
    }

    return (
      <View style={emptyStyles.container}>
        <Text style={emptyStyles.text}>Search for your favorite tracks</Text>
        <Text style={emptyStyles.subtext}>Use the search bar above to find music</Text>
      </View>
    );
  };

  const emptyStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 32,
    },
    text: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.text,
      textAlign: 'center',
      marginBottom: 8,
    },
    subtext: {
      fontSize: 14,
      color: colors.textSecondary,
      textAlign: 'center',
      opacity: 0.7,
    },
  });


  
  console.log(tracks);
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Music Search</Text>
      </View>
      
      <SpotifySearchBar 
        onSearch={handleSearch}
        isLoading={isLoading}
        placeholder="Search for tracks, artists, or albums..."
      />

      <FlatList
        data={tracks}
        renderItem={renderTrack}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmptyState}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tracks.length === 0 ? { flex: 1 } : { paddingBottom: 20 }}
      />
    </View>
  );
}
