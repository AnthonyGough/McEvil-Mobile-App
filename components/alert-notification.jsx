// components/NotificationAlert.jsx
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import AlertIcon from "./svg/alert";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function NotificationAlert({ message = "" }) {
  return (
    <View style={styles.center}>
      <AlertIcon
        width={SCREEN_WIDTH * 0.8}
        height={SCREEN_WIDTH * 0.8 * (171 / 248)}
        color="#D5CFE1"
      />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: SCREEN_HEIGHT * 0.15,
  },
  text: {
    position: "absolute",
    fontFamily: "HiMelody_400Regular",
    fontSize: 32,
    color: "#000",
    textAlign: "center",
    paddingTop: SCREEN_HEIGHT * 0.15,
  },
});
