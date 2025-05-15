import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import Navbar from "../components/navbar";
import { useNavigation, useRoute } from "@react-navigation/native";
import Title from "../components/title";
import DetailCard from "../components/detail-card";

export default function ViewPlaylistScreen() {
  const samplePlaylist = {
    id: "pl1",
    name: "Evening Jazz",
    author: "Smooth Sounds",
    description: "A mellow collection of late-night jazz standards.",
    songs: [
      {
        id: "s1",
        title: "Blue in Green",
        artist: "Miles Davis",
        duration: "5:27",
        releaseDate: "1959-03-02",
      },
      {
        id: "s2",
        title: "So What",
        artist: "Miles Davis",
        duration: "9:22",
        releaseDate: "1959-03-02",
      },
      {
        id: "s3",
        title: "Autumn Leaves",
        artist: "Chet Baker",
        duration: "6:03",
        releaseDate: "1953-01-01",
      },
    ],
  };
  const navigation = useNavigation();
  const route = useRoute();
  // Use route param or fallback to sample
  const playlist = route.params?.playlist ?? samplePlaylist;
  const { name, description, songs = [] } = playlist;

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require("../assets/viewPage.jpg")}
        style={styles.imageCard}
        imageStyle={styles.imageRadius}
        resizeMode="cover"
      />
      <Title primary={name} lines={[description]} />
      {songs.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No songs in this playlist.</Text>
        </View>
      ) : (
        <FlatList
          data={songs}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <DetailCard
              imageSource={require("../assets/viewPage.jpg")}
              title={item.title}
              subtitle={item.artist}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}

      {samplePlaylist.length === 0 ? (
        <View style={styles.container}>
          <Pressable
            onPress={() => navigation.navigate("UpdatePlaylist", { playlist })}
            style={styles.Button}
          >
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.container}>
          <Pressable
            onPress={() => navigation.navigate("UpdatePlaylist", { playlist })}
            style={styles.Button}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </Pressable>
        </View>
      )}

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
  imageCard: {
    width: "100%",
    height: 180,
    justifyContent: "flex-start",
    marginTop: 0,
  },
  imageRadius: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  Button: {
    backgroundColor: "#643173",
    width: 170,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "HiMelody_400Regular",
    fontSize: 25,
    lineHeight: 25,
  },
  list: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  emptyText: {
    color: "#FFF",
    fontSize: 44,
    textAlign: "center",
    marginTop: 24,
    fontFamily: "HiMelody_400Regular",
  },
});
