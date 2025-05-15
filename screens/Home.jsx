import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/navbar";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Music House</Text>

        <Text style={styles.subtitle}>
          Browse songs, explore artists, and manage your personalized playlists
          all in one place.
        </Text>

        <ImageBackground
          source={require("../assets/homePicture.png")}
          style={styles.imageCard}
          imageStyle={styles.imageRadius}
          resizeMode="cover"
        />

        {/* Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.buttonBase, styles.browseButton]}
            onPress={() => navigation.navigate("Song")}
          >
            <Text style={[styles.buttonText, styles.browseText]}>
              Browse songs
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonBase, styles.exploreButton]}
            onPress={() => navigation.navigate("Artist")}
          >
            <Text style={[styles.buttonText, styles.exploreText]}>
              Explore Artists
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonBase, styles.playlistsButton]}
            onPress={() => navigation.navigate("Playlist")}
          >
            <Text style={[styles.buttonText, styles.playlistsText]}>
              Your Playlists
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Navbar navigation={navigation} />
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
  title: {
    color: "#000",
    fontFamily: "HennyPenny_400Regular",
    fontSize: 28,
    lineHeight: 45,
    marginBottom: 12,
    paddingTop: 40,
    textAlign: "center",
  },
  subtitle: {
    color: "#FFF",
    fontFamily: "HiMelody_400Regular",
    fontSize: 22,
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 12,
  },
  imageCard: {
    width: 320,
    height: 240,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 34,
    borderRadius: 15,
  },
  imageRadius: {
    borderRadius: 15,
  },
  buttons: {
    width: "100%",
    alignItems: "center",
  },
  buttonBase: {
    width: 150,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 16,
  },
  browseButton: {
    backgroundColor: "#643173",
  },
  exploreButton: {
    backgroundColor: "#D6F472",
  },
  playlistsButton: {
    backgroundColor: "#F3FFCB",
  },
  buttonText: {
    fontFamily: "HiMelody_400Regular",
    fontSize: 21,
    lineHeight: 23,
  },
  browseText: {
    color: "#FFF",
  },
  exploreText: {
    color: "#000",
  },
  playlistsText: {
    color: "#000",
  },
});
