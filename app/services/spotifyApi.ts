export interface SpotifyTrack {
  id: string;
  name: string;
  artist: {
    id: string;
    name: string;
  };
  album: {
    id: string;
    name: string;
    image_url: string;
  };
}

export async function searchTracks(searchTerm: string): Promise<SpotifyTrack[]> {
  try {
    const response = await fetch(
      `https://www.apitutor.org/spotify/simple/v1/search?q=${encodeURIComponent(searchTerm)}&type=track`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: SpotifyTrack[] = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error('Error fetching tracks:', error);
    throw error;
  }
}