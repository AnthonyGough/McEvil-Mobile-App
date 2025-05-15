// components/ArtistGroup.jsx
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import DeletionButton from "./deletionButton";

/**
 * ArtistGroup
 *
 * Props:
 *  - letter: string              // e.g. "A"
 *  - artists: { id: string, name: string }[]
 *  - onDelete: (artistId: string) => void
 */
export default function ArtistGroup({
  letter,
  artists,
  onDelete,
  onPressArtist,
}) {
  return (
    <View style={styles.group}>
      <Text style={styles.letter}>{letter}</Text>
      {artists.map((artist) => (
        <View key={artist.id} style={styles.rowWrapper}>
          {/* Full row is pressable to view artist */}
          <Pressable style={styles.row} onPress={() => onPressArtist(artist)}>
            <Text style={styles.name}>{artist.name}</Text>
          </Pressable>

          {/* Separate delete button */}
          <DeletionButton size="small" onPress={() => onDelete(artist.id)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 24,
    alignItems: "center",
  },
  letter: {
    fontFamily: "HennyPenny_400Regular",
    fontSize: 30,
    color: "#FFF",
    marginBottom: 12,
  },
  rowWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-around",
    marginBottom: 8,
    backgroundColor: "#DAEDE9",
    borderRadius: 8,
    overflow: "hidden",
  },
  row: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  name: {
    fontFamily: "Bellota_700Bold",
    fontSize: 20,
    color: "#333",
  },
});
