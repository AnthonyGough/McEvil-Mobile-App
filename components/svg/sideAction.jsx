// import { Svg, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
// import { View, StyleSheet, TouchableOpacity } from "react-native";

// export default function SideAction({ mode = "normal", onPress }) {
//   if (mode === "delete") {
//     return (
//       <TouchableOpacity style={styles.deleteBtn} onPress={onPress}>
//         <Text style={styles.deleteText}>Delete</Text>
//       </TouchableOpacity>
//     );
//   }
//   return (
//     <View style={styles.accentContainer}>
//       <Svg width={25} height={50} viewBox="0 0 25 50" fill="none">
//         <Defs>
//           <ClipPath id="clip">
//             <Path d="M0 0H15C20.5228 0 25 4.47715 25 10V40C25 45.5228 20.5228 50 15 50H0V0Z" />
//           </ClipPath>
//         </Defs>
//         <G clipPath="url(#clip)">
//           <Rect width="25" height="50" fill="#448880" />
//         </G>
//         <Path
//           d="M15 2.5C19.1421 2.5 22.5 5.85786 22.5 10V40C22.5 44.1421 19.1421 47.5 15 47.5H2.5V2.5H15Z"
//           stroke="#448880"
//           strokeWidth={5}
//         />
//       </Svg>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   accentContainer: {
//     width: 25,
//     height: 50,
//     marginVertical: 6,
//     borderTopRightRadius: 8,
//     borderBottomRightRadius: 8,
//     backgroundColor: "#448880",
//   },
//   deleteBtn: {
//     width: 50,
//     height: 50,
//     marginVertical: 6,
//     borderRadius: 8,
//     backgroundColor: "#C96A7E",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   deleteText: {
//     color: "#FFF",
//     fontFamily: "HiMelody_400Regular",
//     fontSize: 16,
//     lineHeight: 18,
//   },
// });

// components/svg/SideAction.jsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Svg, G, Path, Defs, ClipPath, Rect } from "react-native-svg";

export default function SideAction({ mode = "normal", onPress }) {
  if (mode === "delete") {
    return (
      <TouchableOpacity style={styles.deleteBtn} onPress={onPress}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    );
  }

  // GREEN BAR (normal mode) is now a button
  return (
    <TouchableOpacity
      style={styles.accentContainer}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Svg width={25} height={50} viewBox="0 0 25 50" fill="none">
        <Defs>
          <ClipPath id="clip">
            <Path d="M0 0H15C20.5228 0 25 4.47715 25 10V40C25 45.5228 20.5228 50 15 50H0V0Z" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#clip)">
          <Rect width="25" height="50" fill="#448880" />
        </G>
        <Path
          d="M15 2.5C19.1421 2.5 22.5 5.85786 22.5 10V40C22.5 44.1421 19.1421 47.5 15 47.5H2.5V2.5H15Z"
          stroke="#448880"
          strokeWidth={5}
        />
      </Svg>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  accentContainer: {
    width: 25,
    height: 50,
    marginVertical: 6,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    overflow: "hidden",
    backgroundColor: "#448880",
  },
  deleteBtn: {
    width: 50,
    height: 50,
    marginVertical: 6,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#C96A7E",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "#FFF",
    fontFamily: "HiMelody_400Regular",
    fontSize: 21,
    lineHeight: 23,
  },
});
