import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts as useHenny,
  HennyPenny_400Regular,
} from "@expo-google-fonts/henny-penny";
import {
  useFonts as useBellota,
  Bellota_400Regular,
  Bellota_700Bold,
} from "@expo-google-fonts/bellota";
import {
  useFonts as useHiMelody,
  HiMelody_400Regular,
} from "@expo-google-fonts/hi-melody";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import HomeScreen from "./screens/Home";
import SongListScreen from "./screens/SongList";
import LogoutScreen from "./screens/Logout";
import CreateSongScreen from "./screens/CreateSong";
import CreateArtistScreen from "./screens/CreateArtist";
import CreatePlaylistScreen from "./screens/CreatePlaylist";
import UpdateSongScreen from "./screens/UpdateSong";
import ViewSongScreen from "./screens/ViewSongById";
import ViewArtistScreen from "./screens/ViewArtistById";
import ViewPlaylistScreen from "./screens/ViewPlaylistById";
import UpdateArtistScreen from "./screens/UpdateArtist";
import UpdatePlaylistScreen from "./screens/UpdatePlaylist";
import PlaylistScreen from "./screens/Playlist";
import ArtistScreen from "./screens/Artist";
import UpdateSuccessScreen from "./screens/UpdateSuccess";
import CreateSuccessScreen from "./screens/CreateSuccess";
import DeleteSuccessScreen from "./screens/DeleteSuccess";

const Stack = createNativeStackNavigator();

export default function App() {
  const [hennyLoaded] = useHenny({ HennyPenny_400Regular });
  const [bellotaLoaded] = useBellota({ Bellota_400Regular, Bellota_700Bold });
  const [hiLoaded] = useHiMelody({ HiMelody_400Regular });

  if (!hennyLoaded || !bellotaLoaded || !hiLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Song" component={SongListScreen} />
          <Stack.Screen name="Artist" component={ArtistScreen} />
          <Stack.Screen name="Playlist" component={PlaylistScreen} />
          <Stack.Screen name="Logout" component={LogoutScreen} />
          <Stack.Screen name="CreateSong" component={CreateSongScreen} />
          <Stack.Screen name="CreateArtist" component={CreateArtistScreen} />
          <Stack.Screen
            name="CreatePlaylist"
            component={CreatePlaylistScreen}
          />

          <Stack.Screen name="ViewSong" component={ViewSongScreen} />
          <Stack.Screen name="ViewArtist" component={ViewArtistScreen} />
          <Stack.Screen name="ViewPlaylist" component={ViewPlaylistScreen} />
          <Stack.Screen name="UpdateSong" component={UpdateSongScreen} />
          <Stack.Screen name="UpdateArtist" component={UpdateArtistScreen} />
          <Stack.Screen
            name="UpdatePlaylist"
            component={UpdatePlaylistScreen}
          />
          <Stack.Screen name="UpdateSuccess" component={UpdateSuccessScreen} />
          <Stack.Screen name="CreateSuccess" component={CreateSuccessScreen} />
          <Stack.Screen name="DeleteSuccess" component={DeleteSuccessScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
