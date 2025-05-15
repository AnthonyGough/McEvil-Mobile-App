// components/DeletableDetailCard.jsx
import React from "react";
import { View, StyleSheet } from "react-native";
import DetailCard from "./detail-card";
import DeletionButton from "./deletionButton";

/**
 * DeletableDetailCard
 *
 * Combines DetailCard with an overlaid delete button on the right
 * Props:
 *  - imageSource: ImageSource
 *  - title: string
 *  - subtitle?: string
 *  - onDelete: () => void    // required to show delete button
 *  - style?: ViewStyle       // override container
 */
export default function DeletableDetailCard({
  imageSource,
  title,
  subtitle,
  onDelete,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <DetailCard
        imageSource={imageSource}
        title={title}
        subtitle={subtitle}
        style={styles.detail}
      />
      <View style={styles.deleteWrapper}>
        <DeletionButton size="large" onPress={onDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 5,  
  },
  detail: {
    width: "100%",
  },
  deleteWrapper: {
    position: "absolute",
    right: "3%",
    top: "50%",
    transform: [{ translateY: -12 }], // half of deletion button height (~23/2)
  },
});
