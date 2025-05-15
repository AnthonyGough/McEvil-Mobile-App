// screens/ArtistsScreen.jsx
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";
import ArtistGroup from "../components/artist-group";

export default function ArtistScreen() {
  const navigation = useNavigation();
  const [artists, setArtists] = useState([
    { id: "a1", name: "Alice" },
    { id: "a2", name: "Adam" },
    { id: "b1", name: "Bob" },
    { id: "b2", name: "Beatrice" },
    { id: "c1", name: "Charlie" },
    { id: "z1", name: "Zoe" },
  ]);

  const handlePressArtist = (artist) => {
    navigation.navigate("ViewArtist", { artist });
  };

  const handleDelete = (id) => {
    setArtists((prev) => prev.filter((a) => a.id !== id));
    navigation.navigate("DeleteSuccess");
  };

  // group by initial letter
  const grouped = artists.reduce((acc, artist) => {
    const L = artist.name[0].toUpperCase();
    acc[L] = acc[L] || [];
    acc[L].push(artist);
    return acc;
  }, {});

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.header}>Artists List</Text>
      <ScrollView contentContainerStyle={styles.content}>
        {Object.keys(grouped)
          .sort()
          .map((letter) => (
            <ArtistGroup
              key={letter}
              letter={letter}
              artists={grouped[letter]}
              onDelete={handleDelete}
              onPressArtist={handlePressArtist}
            />
          ))}
      </ScrollView>
      <Pressable
        style={styles.newButton}
        onPress={() => navigation.navigate("CreateArtist")}
      >
        <Text style={styles.newButtonText}>Create an artist</Text>
      </Pressable>

      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#5DA399" },
  header: {
    fontFamily: "HennyPenny_400Regular",
    fontSize: 32,
    color: "#FFF",
    textAlign: "center",
    marginVertical: 24,
  },
  content: {
    alignItems: "center",
    paddingBottom: 32,
  },
  newButton: {
    backgroundColor: "#643173",
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 24,
  },
  newButtonText: {
    color: "#FFF",
    fontFamily: "HiMelody_400Regular",
    fontSize: 20,
  },
});
