import React, { ReactNode, useEffect, useState } from "react";
import {
  NativeSyntheticEvent,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
  ViewStyle,
} from "react-native";

//make text black when typing in the search bar 

type Props = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChangeText?: (text: string) => void;
  onClear?: () => void;
  onSubmit?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  bgColor?: string;
  icon?: ReactNode;
  style?: ViewStyle;
  showClear?: boolean;
  accessibleLabel?: string;
};

export default function SearchBar({
  placeholder = "Search",
  value,
  defaultValue = "",
  onChangeText,
  onClear,
  onSubmit,
  bgColor = "#ffffff20",
  icon,
  style,
  showClear = true,
  accessibleLabel = "Search input",
}: Props) {
  const [internal, setInternal] = useState<string>(defaultValue);

  useEffect(() => {
    if (typeof value === "string") setInternal(value);
  }, [value]);

  const handleChange = (text: string) => {
    if (typeof value !== "string") setInternal(text);
    onChangeText?.(text);
  };

  const handleClear = () => {
    if (typeof value !== "string") setInternal("");
    onClear?.();
    onChangeText?.("");
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.wrapper,
        { backgroundColor: bgColor, opacity: pressed ? 0.96 : 1 },
        style,
      ]}
      accessibilityRole="search"
      accessibilityLabel={accessibleLabel}
    >
      {icon ? <View style={styles.iconWrapper}>{icon}</View> : null}

      <TextInput
        style={[styles.input, icon ? { paddingLeft: 44 } : undefined]}
        placeholder={placeholder}
        placeholderTextColor="#000000ff"
        value={internal}
        onChangeText={handleChange}
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        accessible
        accessibilityLabel={accessibleLabel}
        underlineColorAndroid="transparent"
      />

      {showClear && internal.length > 0 ? (
        <Pressable
          onPress={handleClear}
          style={({ pressed }) => [
            styles.clearButton,
            { opacity: pressed ? 0.7 : 1 },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Clear search"
        >
          <Text style={styles.clearText}>✕</Text>
        </Pressable>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 48,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.18,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
    paddingRight: 12,
    paddingLeft: 12,
    marginBottom: 16,
  },
  iconWrapper: {
    position: "absolute",
    left: 12,
    top: 12,
  },
  input: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 10,
    paddingRight: 36,
  },
  clearButton: {
    position: "absolute",
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  clearText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
});
