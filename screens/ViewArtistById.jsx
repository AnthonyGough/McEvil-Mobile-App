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

export default function ViewArtistScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  // Guard against missing params:
  const artist = route.params?.artist ?? {
    name: "Selena",
    genre: "Pop",
    bio: "American singer",
    songs: ["Who Says"],
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require("../assets/viewPage.jpg")}
        style={styles.imageCard}
        imageStyle={styles.imageRadius}
        resizeMode="cover"
      />
      <Title
        primary="{artist.name}"
        secondary="{artist.genre}"
        lines={["artist.description"]}
      />
      <DetailCard
        imageSource={require("../assets/viewPage.jpg")}
        title="{song.name}"
      />
      <View style={styles.container}>
        <Pressable
          onPress={() => navigation.navigate("UpdateArtist", { artist })}
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
});
