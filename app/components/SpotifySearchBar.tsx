import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface SpotifySearchBarProps {
  onSearch: (searchTerm: string) => void;
  isLoading?: boolean;
  placeholder?: string;
}

export default function SpotifySearchBar({ 
  onSearch, 
  isLoading = false, 
  placeholder = "Search for tracks..." 
}: SpotifySearchBarProps) {
  const { styles, colors } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log(searchTerm)
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const searchStyles = StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderRadius: 25,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      color: colors.text,
      paddingVertical: 4,
    },
    searchButton: {
      backgroundColor: colors.primary,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
      marginLeft: 8,
    },
    searchButtonDisabled: {
      backgroundColor: colors.textSecondary,
      opacity: 0.5,
    },
    searchButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
    },
    loadingText: {
      color: colors.textSecondary,
      fontSize: 14,
      textAlign: 'center',
      marginTop: 8,
    },
  });

  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.searchContainer}>
        <TextInput
          style={searchStyles.textInput}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          editable={!isLoading}
        />
        <TouchableOpacity
          style={[
            searchStyles.searchButton,
            (!searchTerm.trim() || isLoading) && searchStyles.searchButtonDisabled
          ]}
          onPress={handleSearch}
          disabled={!searchTerm.trim() || isLoading}
        >
          <Text style={searchStyles.searchButtonText}>
            {isLoading ? '...' : 'Search'}
          </Text>
        </TouchableOpacity>
      </View>
      {isLoading && (
        <Text style={searchStyles.loadingText}>Searching for tracks...</Text>
      )}
    </View>
  );
}
