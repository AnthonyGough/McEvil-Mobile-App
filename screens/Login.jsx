import AuthCard from "../components/auth-card";
import React, { useState } from "react";
import { TextInput, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const handleLogin = async () => {
       if (!username || !password) {
         alert("Please enter both username and password.");
         return;
       }
   
       try {
         const response = await fetch("https://anthony05.ifn666.com/zoe/mhouse/api/auth/login", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ username, password }),
         });
   
         if (response.ok) {
           const data = await response.json();
           console.log("User Logged in!", data);
          
           Alert.alert("Success", "Login successfully!")
         } else {
          
           alert("Login failed. Please check your credentials.");
         }
       } catch (error) {
         console.error("Error during Login:", error);
         alert("An error occurred. Please try again later.");
       }
     };

 

  return (
    <SafeAreaView style={styles.container}>
      <AuthCard
        title="Welcome Back"
        buttonText="Log in"
        onButtonPress={() => handleLogin()}
        footerText="Don't have an account? "
        footerLinkText="Register"
        onFooterPress={() => handleLogin()}
      >
        <Text style={styles.label}>username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </AuthCard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5DA399",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  label: {
    fontFamily: "Bellota_400Regular",
    fontSize: 19,
    marginBottom: 5,
    color: "#000",
  },
});
