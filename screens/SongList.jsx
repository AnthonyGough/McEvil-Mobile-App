import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SideAction from "../components/svg/sideAction";
import Navbar from "../components/navbar";

export default function SongListScreen() {
  const navigation = useNavigation();
  const [songs, setSongs] = useState([
    {
      id: "1",
      title: "Sunset Boulevard",
      artist: "The Dreamers",
      duration: "3:45",
    },
    {
      id: "2",
      title: "Moonlight Dance",
      artist: "Night Owls",
      duration: "4:12",
    },
    { id: "3", title: "Morning Dew", artist: "Early Birds", duration: "2:58" },
    { id: "4", title: "Starlit Sky", artist: "Galaxy Twins", duration: "5:03" },
  ]);
  const [expandedId, setExpandedId] = useState(null);
  const handleBarPress = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleDelete = (id) => {
    setSongs((prev) => prev.filter((s) => s.id !== id));
    setExpandedId(null);
  };
  const collapse = () => setExpandedId(null);

  const renderItem = ({ item }) => {
    const isDeleting = expandedId === item.id;

    return (
      <View style={styles.row}>
        <Pressable
          style={styles.card}
          onPress={() => {
            collapse();
            navigation.navigate("ViewSong", { song: item });
          }}
        >
          <View style={styles.cardContent}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.songMeta}>
              {item.artist} • {item.duration}
            </Text>
          </View>
        </Pressable>
        <SideAction
          mode={isDeleting ? "delete" : "normal"}
          onPress={() => {
            if (isDeleting) {
              handleDelete(item.id);
              navigation.navigate("DeleteSuccess");
            } else {
              handleBarPress(item.id);
            }
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Pressable onPress={collapse} style={styles.headerWrapper}>
          <Text style={styles.header}>Songs List</Text>
        </Pressable>

        <View style={styles.listWrapper}>
          <FlatList
            data={songs}
            keyExtractor={(i) => i.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            onScrollBeginDrag={collapse}
          />
        </View>

        <Pressable
          onPress={() => {
            collapse();
            navigation.navigate("CreateSong");
          }}
          style={styles.newSongButton}
        >
          <Text style={styles.newSongText}>Create a new song</Text>
        </Pressable>
      </View>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5DA399",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  headerWrapper: {
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 12,
  },
  header: {
    color: "#FFF",
    fontFamily: "HennyPenny_400Regular",
    fontSize: 30,
    lineHeight: 45,
    marginBottom: 12,
  },
  listWrapper: {
    backgroundColor: "#D5CFE1",
    borderRadius: 10,
    padding: 16,
    width: "95%",
    height: 400,
    flex: 0,
  },
  listContent: {
    paddingBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#DAEDE9",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#448880",
    marginBottom: 16,
    overflow: "hidden",
    width: 255,
    height: 80,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },

  songTitle: {
    color: "#000",
    fontFamily: "HennyPenny_400Regular",
    fontSize: 18,
    marginBottom: 3,
    textAlign: "center",
  },
  songMeta: {
    color: "#000",
    fontFamily: "Bellota_400Regular",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "center",
  },
  newSongButton: {
    backgroundColor: "#643173",
    width: 170,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 16,
  },
  newSongText: {
    color: "#FFF",
    fontFamily: "HiMelody_400Regular",
    fontSize: 23,
    lineHeight: 23,
  },
});
