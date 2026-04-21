import React from "react";
import { AbsoluteFill } from "remotion";
import { COLORS } from "../constants";

export const SceneFrame: React.FC<{
  children: React.ReactNode;
  accentColor?: string;
}> = ({ children, accentColor = COLORS.blue }) => {
  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: accentColor,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 4,
          left: 0,
          right: 0,
          bottom: 0,
          padding: 80,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
