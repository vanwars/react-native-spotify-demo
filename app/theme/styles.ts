import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { borderRadius, spacing } from "./spacing";
import { typography } from "./typography";

export const createStyles = (isDark: boolean) => {
  const themeColors = isDark ? colors.dark : colors.light;

  return StyleSheet.create({
    // Container styles
    container: {
      flex: 1,
      backgroundColor: themeColors.background,
    },
    centeredContainer: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: themeColors.background,
      padding: spacing.lg,
    },
    headerRow: {
      alignSelf: "flex-start",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 16,
    },

    heading: {
      fontSize: typography.fontSize["2xl"],
      fontWeight: typography.fontWeight.bold,
      color: themeColors.text,
      marginBottom: spacing.sm,
    },
    subheading: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.semibold,
      color: themeColors.text,
      marginBottom: spacing.md,
    },
    body: {
      fontSize: typography.fontSize.base,
      color: themeColors.text,
      lineHeight: typography.fontSize.base * typography.lineHeight.normal,
    },
    caption: {
      fontSize: typography.fontSize.sm,
      color: themeColors.textSecondary,
      opacity: 0.7,
    },

    // Button styles
    primaryButton: {
      backgroundColor: themeColors.primary,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.full,
      alignItems: "center",
      justifyContent: "center",
    },
    primaryButtonText: {
      color: "white",
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.semibold,
    },

    secondaryButton: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: themeColors.primary,
      paddingHorizontal: spacing.lg,
      paddingVertical: spacing.md,
      borderRadius: borderRadius.full,
      alignItems: "center",
      justifyContent: "center",
    },
    secondaryButtonText: {
      color: themeColors.primary,
      fontSize: typography.fontSize.base,
      fontWeight: typography.fontWeight.semibold,
    },

    // Card styles
    card: {
      backgroundColor: themeColors.card,
      borderRadius: borderRadius.lg,
      padding: spacing.lg,
      shadowColor: themeColors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },

    // Input styles
    input: {
      backgroundColor: themeColors.surface,
      borderWidth: 1,
      borderColor: themeColors.border,
      borderRadius: borderRadius.md,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      fontSize: typography.fontSize.base,
      color: themeColors.text,
    },

    // Divider
    divider: {
      height: 1,
      backgroundColor: themeColors.divider,
      marginVertical: spacing.md,
    },
  });
};
