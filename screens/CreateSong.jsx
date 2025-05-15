import React from "react";
import { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import InfoCard from "../components/info-card";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";

export default function CreateSongScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Create a Song</Text>

        <InfoCard
          labels={["Title", "Duration (second)", "Released Date", "Artist"]}
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
    marginBottom: 12,
  },
});
