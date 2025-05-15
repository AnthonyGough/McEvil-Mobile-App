import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import InfoCard from "../components/info-card";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";

export default function CreateArtistScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Create an Artist</Text>

        <InfoCard
          labels={["Name", "Genre", "Bio", "Songs"]}
          text="Create"
          action={() => navigation.navigate("CreateSuccess")}
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
    marginBottom: 9,
    paddingTop: 9,
  },
});
