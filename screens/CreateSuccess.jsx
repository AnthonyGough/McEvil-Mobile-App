import React from "react";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView, View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../components/navbar";
import NotificationAlert from "../components/alert-notification";

export default function CreateSuccessScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View>
          <NotificationAlert message="Create successfully!" />
        </View>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.Button}
        >
          <Text style={styles.buttonText}>Done</Text>
        </Pressable>
      </View>
      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: "#233230",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  Button: {
    backgroundColor: "#643173",
    width: 170,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 130,
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "HiMelody_400Regular",
    fontSize: 25,
    lineHeight: 25,
  },
});
