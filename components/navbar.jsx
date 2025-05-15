import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SongIcon from "./svg/song";
import ArtistIcon from "./svg/artist";
import HomeIcon from "./svg/home";
import PlaylistIcon from "./svg/playlist";
import UserIcon from "./svg/user";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate("Song")}>
        <SongIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Artist")}>
        <ArtistIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <HomeIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Playlist")}>
        <PlaylistIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Logout")}>
        <UserIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#D5CFE1",
    paddingVertical: 10,
  },
});
