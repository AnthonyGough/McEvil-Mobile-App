import AuthCard from "../components/auth-card";
import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, SafeAreaView, Text } from "react-native";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
       if (!username || !password) {
         alert("Please enter both username and password.");
         return;
       }
   
       try {
         const response = await fetch("https://anthony05.ifn666.com/zoe/mhouse/api/auth/register", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({ username, password }),
         });
   
         if (response.ok) {
           const data = await response.json();
           console.log("Registered new user successfully!", data);
          
           Alert.alert("Success", "Registered successfully!")
         } else {
          
           alert("Register failed. Please check your credentials.");
         }
       } catch (error) {
         console.error("Error during register:", error);
         alert("An error occurred. Please try again later.");
       }
     };

  return (
    <SafeAreaView style={styles.container}>
      <AuthCard
        title="Register"
        buttonText="Register"
        onButtonPress={() => handleRegister()}
        footerText="Already have an account?"
        footerLinkText="Login"
        onFooterPress={() => handleRegister()}
      >
        <Text style={styles.label}>username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={userName}
          onChangeText={setUserName}
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
