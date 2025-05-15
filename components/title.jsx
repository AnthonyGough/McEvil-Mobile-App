// components/Title.jsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

/**
 * Title
 *
 * Props:
 *  - primary:   string (e.g. song name, artist name, playlist name)
 *  - secondary: string (e.g. artist name, genre, author)
 *  - lines:     string[] (one or more subtitle lines)
 */
export default function Title({ primary, secondary, lines = [] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>
        {primary}
        {secondary ? (
          <>
            <Text style={styles.separator}> | </Text>
            {secondary}
          </>
        ) : null}
      </Text>
      {lines.map((line, i) => (
        <Text style={styles.sub} key={i}>
          {line}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 20,
  },
  main: {
    fontFamily: "HennyPenny_400Regular",
    fontSize: 24,
    color: "#FFF",
    textAlign: "center",
  },
  separator: {
    // make the "|" a bit smaller or muted if you like:
    fontFamily: "HennyPenny_400Regular",
    fontSize: 30,
    color: "#EEE",
  },
  sub: {
    fontFamily: "Bellota_400Regular",
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
  },
});
