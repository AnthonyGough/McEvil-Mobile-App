// components/UpdateCard.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

/**
 * UpdateCard
 *
 * Props:
 *  - labels: string[]             // e.g. ["Title","Duration","Artist"]
 *  - initialValues: { [label]: string }  // prefill values by label
 *  - songs?: string[]             // for "Songs" dropdown
 *  - artists?: string[]           // for "Artist" dropdown
 *  - onUpdate: (values) => void   // callback with updated values
 *  - buttonText?: string          // override default "Update"
 */
export default function UpdateCard({
  labels = [],
  initialValues = {},
  songs = [],
  artists = [],
  onUpdate,
  buttonText = "Update",
}) {
  // initialize state from initialValues or empty string
  const [values, setValues] = useState(
    labels.reduce(
      (acc, lbl) => ({ ...acc, [lbl]: initialValues[lbl] ?? "" }),
      {}
    )
  );

  const handleChange = (label, val) => {
    setValues((prev) => ({ ...prev, [label]: val }));
  };

  return (
    <View style={styles.card}>
      {labels.map((label, idx) => {
        const lower = label.toLowerCase();
        const opts =
          lower === "songs"
            ? songs
            : lower === "artist" || lower === "artists"
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
                  {opts.map((opt) => (
                    <Picker.Item key={opt} label={opt} value={opt} />
                  ))}
                </Picker>
              </View>
            ) : (
              <TextInput
                style={styles.input}
                value={values[label]}
                onChangeText={(v) => handleChange(label, v)}
                keyboardType={
                  lower.includes("duration") ? "numeric" : "default"
                }
              />
            )}
          </View>
        );
      })}

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onUpdate(values)}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
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
  input: {
    borderWidth: 1,
    borderColor: "#448880",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFF",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#448880",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#FFF",
    height: 100,
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
