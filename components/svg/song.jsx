import React from 'react';
import { Svg, G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export default function SongIcon({
  size = 25,
  color = '#5DA399',
  style,
}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      style={style}
    >
      <Defs>
        <ClipPath id="thumbClip">
          <Rect width="25" height="25" fill="white" />
        </ClipPath>
      </Defs>

      <G clipPath="url(#thumbClip)">
        <Path
          d="M24.3701 0.307614C24.7656 0.600583 25 1.06933 25 1.5625V5.07812V17.9687C25 20.127 22.9004 21.875 20.3125 21.875C17.7246 21.875 15.625 20.127 15.625 17.9687C15.625 15.8105 17.7246 14.0625 20.3125 14.0625C20.8594 14.0625 21.3867 14.1406 21.875 14.2871V7.17773L9.375 10.9277V21.0937C9.375 23.252 7.27539 25 4.6875 25C2.09961 25 0 23.252 0 21.0937C0 18.9355 2.09961 17.1875 4.6875 17.1875C5.23437 17.1875 5.76172 17.2656 6.25 17.4121V9.76562V6.25C6.25 5.56152 6.7041 4.95117 7.36328 4.75097L22.9883 0.0634737C23.4619 -0.0781278 23.9746 0.00976279 24.3701 0.307614Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}
