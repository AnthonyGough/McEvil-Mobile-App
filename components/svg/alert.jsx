import React from "react";
import { Svg, Ellipse } from "react-native-svg";
export default function AlertIcon({
  width = 250,
  height = 173,
  color = "fill: #D5CFE1;",
  style,
}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 250 173"
      fill="none"
      style={style}
    >
      <Ellipse cx={124} cy={85.5} rx={124} ry={85.5} fill={color} />
    </Svg>
  );
}
