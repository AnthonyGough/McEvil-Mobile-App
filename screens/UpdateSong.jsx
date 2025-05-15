import React from "react";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import UpdateCard from "../components/update-card";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";

export default function UpdateSongScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const song = route.params.song;
  const labels = ["Title", "Duration (second)", "Released", "Artist"];
  const handleUpdate = (values) => {
    console.log("Updated song:", values);
    // TODO: call your update API or state logic here
    navigation.navigate("UpdateSuccess");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Update a Song</Text>

        <UpdateCard
          labels={labels}
          initialValues={{
            Title: song.title,
            "Duration (second)": song.duration,
            Released: song.releaseDate,
            Artist: song.artist,
          }}
          artists={["The Dreamers", "Night Owls", "Early Birds"]}
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
