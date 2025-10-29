import * as AuthSession from 'expo-auth-session';
import React from 'react';
import { Button, View } from 'react-native';

const CLIENT_ID = 'your_spotify_client_id';
const SCOPES = ['user-read-email', 'playlist-read-private'];

export default function SpotifyAuth() {
  const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
    redirectUri
  )}&scope=${encodeURIComponent(SCOPES.join(' '))}`;

  const handleLogin = async () => {
    const result = await AuthSession.startAsync({ authUrl });

    if (result.type === 'success' && result.params.access_token) {
      console.log('Spotify token:', result.params.access_token);
    } else {
      console.log('Login canceled or failed:', result);
    }
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="Login with Spotify" onPress={handleLogin} />
    </View>
  );
}
