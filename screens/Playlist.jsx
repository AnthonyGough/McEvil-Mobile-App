// screens/PlaylistScreen.jsx
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";
import DeletableDetailCard from "../components/deletable-detail-card";

export default function PlaylistScreen() {
  const navigation = useNavigation();
  // dummy data
  const [playlists, setPlaylists] = useState([
    {
      id: "p1",
      name: "Evening Jazz",
      description: "A mellow collection of late-night jazz standards.",
    },
    {
      id: "p2",
      name: "Morning Beats",
      description: "Upbeat tracks to start your day.",
    },
    {
      id: "p3",
      name: "Road Trip",
      description: "The perfect soundtrack for any journey.",
    },
  ]);

  const handleDelete = (id) => {
    setPlaylists((prev) => prev.filter((p) => p.id !== id));
    navigation.navigate("DeleteSuccess");
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("ViewPlaylist", { playlist: item });
      }}
    >
      <DeletableDetailCard
        imageSource={require("../assets/viewPage.jpg")}
        title={item.name}
        subtitle={item.description}
        onDelete={() => handleDelete(item.id)}
        style={styles.cardWrapper}
      />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.header}>Playlists</Text>

      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />

      <Pressable
        style={styles.newButton}
        onPress={() => navigation.navigate("CreatePlaylist")}
      >
        <Text style={styles.newButtonText}>Create a playlist</Text>
      </Pressable>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#5DA399",
  },
  header: {
    fontFamily: "HennyPenny_400Regular",
    fontSize: 32,
    color: "#FFF",
    textAlign: "center",
    marginVertical: 12,
    marginTop: 25,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  cardWrapper: {
    width: "100%",
    alignItems: "center",
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
