import AuthCard from "../components/auth-card";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/navbar";
import { useNavigation } from "@react-navigation/native";

export default function LogoutScreen() {
  const navigation = useNavigation();
  const handleLogout = () => {
    // TODO: clear tokens / auth state here
    navigation.replace("Login"); // or whatever your login route is
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <AuthCard
          title="Would you like to log out?"
          buttonText="Logout"
          onButtonPress={handleLogout}
          footerText=""
          footerLinkText=""
          onFooterPress={() => {}}
        ></AuthCard>
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
});
