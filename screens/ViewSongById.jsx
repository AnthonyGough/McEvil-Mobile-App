import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/navbar";
import { useNavigation, useRoute } from "@react-navigation/native";
import Title from "../components/title";
import DetailCard from "../components/detail-card";

export default function ViewSongScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { song } = route.params;

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require("../assets/viewPage.jpg")}
        style={styles.imageCard}
        imageStyle={styles.imageRadius}
        resizeMode="cover"
      />
      <Title
        primary="Blank Space"
        secondary="Taylor Swift"
        lines={["2016.06.02", "04:33"]}
      />
      <Text style={styles.text}>Playlists covers "song’s name"</Text>

      <DetailCard
        imageSource={require("../assets/viewPage.jpg")}
        title="My Favorite Hits"
        subtitle="A mix of classics"
      />

      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate("UpdateSong", { song })}
          style={styles.Button}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </Pressable>
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
  imageCard: {
    width: "100%",
    height: 100,
    justifyContent: "flex-start",
    marginTop: 0,
  },
  imageRadius: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    fontFamily: "Bellota_700Bold",
    fontSize: 20,
    color: "#D5CFE1",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
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
});
