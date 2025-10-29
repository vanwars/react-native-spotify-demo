import React, { useState } from 'react';
import { Image, Linking, Modal, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useTheme } from '../contexts/ThemeContext';
import { SpotifyTrack } from '../services/spotifyApi';

interface TrackCardProps {
  track: SpotifyTrack;
  onPress?: () => void;
}

export default function TrackCard({ track, onPress }: TrackCardProps) {
  const { styles, colors } = useTheme();
  const [showEmbeddedPlayer, setShowEmbeddedPlayer] = useState(false);

  const handleSpotifyPress = async () => {
    try {
      await Linking.openURL(`https://open.spotify.com/track/${track.id}`);
    } catch (error) {
      console.error('Error opening Spotify:', error);
    }
  };

  const handleTrackPress = () => {
    setShowEmbeddedPlayer(true);
  };

  const trackStyles = StyleSheet.create({
    container: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageContainer: {
      marginRight: 12,
    },
    albumImage: {
      width: 60,
      height: 60,
      borderRadius: 8,
    },
    trackInfo: {
      flex: 1,
    },
    trackName: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 4,
    },
    artistName: {
      fontSize: 14,
      color: colors.textSecondary,
      marginBottom: 2,
    },
    albumName: {
      fontSize: 12,
      color: colors.textSecondary,
      opacity: 0.7,
    },
    duration: {
      fontSize: 12,
      color: colors.textSecondary,
      marginTop: 4,
    },
    spotifyButton: {
      backgroundColor: '#1DB954',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      marginTop: 8,
    },
    spotifyButtonText: {
      color: 'white',
      fontSize: 12,
      fontWeight: '600',
    },
    embeddedButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 20,
      marginTop: 8,
      marginRight: 8,
    },
    embeddedButtonText: {
      color: 'white',
      fontSize: 12,
      fontWeight: '600',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: colors.background,
      borderRadius: 12,
      padding: 20,
      margin: 20,
      width: '90%',
      height: '80%',
    },
    closeButton: {
      backgroundColor: colors.textSecondary,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      alignSelf: 'flex-end',
      marginBottom: 10,
    },
    closeButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
    },
    webViewContainer: {
      flex: 1,
      borderRadius: 12,
      overflow: 'hidden',
    },
  });

  console.log("trackCard", track);
  return (
    <>
      <TouchableOpacity style={trackStyles.container} onPress={handleTrackPress}>
        <View style={trackStyles.content}>
          <View style={trackStyles.imageContainer}>
            <Image
              source={{ uri: track.album?.image_url }}
              style={trackStyles.albumImage}
              resizeMode="cover"
            />
          </View>
          <View style={trackStyles.trackInfo}>
            <Text style={trackStyles.trackName} numberOfLines={1}>
              {track.name}
            </Text>
            <Text style={trackStyles.artistName} numberOfLines={1}>
              {track.artist?.name}
            </Text>
            <Text style={trackStyles.albumName} numberOfLines={1}>
              {track.album.name}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={trackStyles.embeddedButton} onPress={handleTrackPress}>
            <Text style={trackStyles.embeddedButtonText}>Play Preview</Text>
          </TouchableOpacity>
          <TouchableOpacity style={trackStyles.spotifyButton} onPress={handleSpotifyPress}>
            <Text style={trackStyles.spotifyButtonText}>Open in Spotify</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <Modal
        visible={showEmbeddedPlayer}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowEmbeddedPlayer(false)}
      >
        <View style={trackStyles.modalContainer}>
          <View style={trackStyles.modalContent}>
            <TouchableOpacity 
              style={trackStyles.closeButton} 
              onPress={() => setShowEmbeddedPlayer(false)}
            >
              <Text style={trackStyles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <View style={trackStyles.webViewContainer}>
              {Platform.OS === 'web' ? (
                <iframe
                  src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{
                    borderRadius: '12px',
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    minHeight: '352px'
                  }}
                />
              ) : (
                <WebView
                  source={{
                    uri: `https://open.spotify.com/embed/track/${track.id}?utm_source=generator`
                  }}
                  style={{ flex: 1 }}
                  allowsInlineMediaPlayback={true}
                  mediaPlaybackRequiresUserAction={false}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  startInLoadingState={true}
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
