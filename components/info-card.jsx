// components/InfoCard.jsx
import React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function InfoCard({
  labels = [],
  songs = [],
  artists = [],
  text,
  action,
}) {
  // local state for each field value
  const [values, setValues] = useState(
    labels.reduce((acc, lbl) => ({ ...acc, [lbl]: "" }), {})
  );

  const handleChange = (label, val) => {
    setValues((prev) => ({ ...prev, [label]: val }));
  };

  return (
    <View style={styles.card}>
      {labels.map((label, idx) => {
        // choose dropdown options if label matches
        const opts =
          label.toLowerCase() === "songs"
            ? songs
            : label.toLowerCase() === "artist"
            ? artists
            : null;
        return (
          <View style={styles.field} key={idx}>
            <Text style={styles.label}>{label}</Text>
            {opts ? (
              <View style={styles.pickerWrapper}>
                <Picker
                  style={styles.picker}
                  itemStyle={styles.pickerItem}
                  selectedValue={values[label]}
                  onValueChange={(v) => handleChange(label, v)}
                >
                  <Picker.Item label={`Select ${label}`} value="" />
                  {opts.map((item) => (
                    <Picker.Item key={item} label={item} value={item} />
                  ))}
                </Picker>
              </View>
            ) : (
              <TextInput
                style={styles.input}
                value={values[label]}
                onChangeText={(v) => handleChange(label, v)}
                keyboardType={
                  label.toLowerCase().includes("duration")
                    ? "numeric"
                    : "default"
                }
              />
            )}
          </View>
        );
      })}
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={action}>
          <Text style={styles.buttonText}>{text}</Text>
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
    width: "80%",
    maxWidth: 400,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontFamily: "Bellota_700Bold",
    marginBottom: 6,
    fontSize: 16,
    color: "#333",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#448880",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#DAEDE9",
    height: 100,
    padding: 0,
  },
  picker: {
    height: 40,
    margin: 0,
    paddingTop: 0,
  },
  pickerItem: {
    paddingTop: 20,
    height: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: "#448880",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#DAEDE9",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#643173",
    width: 170,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "HiMelody_400Regular",
    fontSize: 23,
    lineHeight: 23,
  },
});
