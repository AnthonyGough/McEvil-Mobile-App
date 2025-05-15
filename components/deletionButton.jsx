import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/**
 * DeletionButton
 *
 * Props:
 *  - size: "small" | "large"
 *  - onPress: () => void
 *  - label?: string   // defaults to "Delete"
 */
export default function DeletionButton({
  size = "small",
  onPress,
  label = "Delete",
}) {
  const style = size === "small" ? styles.small : styles.large;
  return (
    <TouchableOpacity style={[styles.base, style.container]} onPress={onPress}>
      <Text style={[styles.text, style.text]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "#C96A7E",
    borderRadius: 10,
  },
  small: {
    container: {
      width: 65,
      height: 26,
      paddingHorizontal: 6,
      marginEnd: 13,
    },
    text: {
      fontFamily: "HiMelody_400Regular",
      fontSize: 19,
      lineHeight: 23,
      color: "#FFF",
    },
  },
  large: {
    container: {
      width: 67,
      height: 30,
      paddingBottom: 1,
      paddingLeft: 9,
      paddingRight: 8,
      borderWidth: 1,
      borderColor: "#C96A7E",
    },
    text: {
      fontFamily: "HiMelody_400Regular",
      fontSize: 23,
      lineHeight: 27,
      color: "#FFF",
    },
  },
});
