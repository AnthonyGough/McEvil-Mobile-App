import React from "react";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import UpdateCard from "../components/update-card";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";

export default function UpdatePlaylistScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  // Guard against missing params
  const playlist = route.params?.playlist ?? {
    name: "Hey ya",
    description: "My first playlist",
    songs: [
      { id: "s1", title: "Naturally" },
      { id: "s2", title: "Blank Space" },
    ],
  };

  const labels = ["Name", "Description", "Songs"];
  // Never crash, even if songs is missing
  const songTitles = Array.isArray(playlist.songs)
    ? playlist.songs.map((s) => s.title ?? s)
    : [];
  const handleUpdate = (values) => {
    console.log("Updated playlist:", values);
    // TODO: call your update API or state logic here
    navigation.navigate("UpdateSuccess");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Update a Playlist</Text>

        <UpdateCard
          labels={labels}
          initialValues={{
            Name: playlist.name,
            Description: playlist.description,
            Songs: songTitles.join(", "),
          }}
          songs={songTitles}
          onUpdate={handleUpdate}
          buttonText="Save"
        />
      </View>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#5DA399",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: "#FFF",
    fontFamily: "HennyPenny_400Regular",
    fontSize: 30,
    lineHeight: 45,
    marginBottom: 12,
  },
});
