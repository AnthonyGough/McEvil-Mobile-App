// components/DetailCard.jsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

/**
 * DetailCard
 *
 * Props:
 *  - imageSource: ImageSource (e.g. require("../assets/foo.png") or { uri: ... })
 *  - title: string
 *  - subtitle?: string   // optional second line
 *  - style?: ViewStyle   // override or extend container
 */
export default function DetailCard({ imageSource, title, subtitle, style }) {
  return (
    <View style={[styles.card, style]}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
    </View>
  );
}

const CARD_HEIGHT = 120;
const IMAGE_SIZE = 90;
const PADDING = 6;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E3F2EF",
    borderRadius: 12,
    padding: PADDING,
    height: CARD_HEIGHT,
    width: "95%",
    margin: "auto",
    
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 8,
    marginRight:  PADDING * 2,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Bellota_700Bold",
    fontSize: 20,
    color: "#333",
  },
  subtitle: {
    fontFamily: "Bellota_400Regular",
    fontSize: 17,
    color: "#333",
    marginTop: 3,
    width: 150,
  },
});
