import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

export default function AuthCard({
  title,
  children,
  buttonText,
  onButtonPress,
  footerText,
  footerLinkText,
  onFooterPress,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      {children}

      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>{footerText}</Text>
        <TouchableOpacity onPress={onFooterPress}>
          <Text style={styles.footerLink}>{footerLinkText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#DAEDE9",
    borderRadius: 20,
    padding: 24,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontFamily: "HennyPenny_400Regular",
    fontSize: 25,
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#643173",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginTop: 8,
    width: "60%",
    alignSelf: "center",
    height: 60,
  },
  buttonText: {
    fontFamily: "HennyPenny_400Regular",
    color: "#fff",
    fontSize: 19,
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  footerText: {
    fontFamily: "Bellota_700Bold",
    fontSize: 16,
    color: "#333",
    paddingEnd: 5,
  },
  footerLink: {
    fontFamily: "Bellota_700Bold",
    fontSize: 16,
    color: "#643173",
    textDecorationLine: "none",
  },
});
