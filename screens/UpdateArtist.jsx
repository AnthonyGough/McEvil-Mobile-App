import React from "react";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import UpdateCard from "../components/update-card";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";

export default function UpdateArtistScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { artist } = route.params;
  const labels = ["Name", "Genre", "Bio", "Songs"];
  const handleUpdate = (values) => {
    console.log("Updated artist:", values);
    // TODO: call your update API or state logic here
    navigation.navigate("UpdateSuccess");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Update an Artist</Text>

        <UpdateCard
          labels={labels}
          initialValues={{
            Name: artist.name,
            Genre: artist.genre,
            Bio: artist.bio,
            Songs: artist.songs || [],
          }}
          // supply the full list of existing songs for the dropdown
          songs={artist.songs || []}
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
