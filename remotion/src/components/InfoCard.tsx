import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";

export const InfoCard: React.FC<{
  icon: string;
  title: string;
  body: string;
  color?: string;
  delay?: number;
}> = ({ icon, title, body, color = COLORS.blue, delay = 0 }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  const translateY = interpolate(frame, [delay, delay + 20], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 12,
        padding: 24,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div style={{ fontSize: 32 }}>{icon}</div>
      <div
        style={{
          fontFamily: FONT,
          fontSize: 20,
          fontWeight: 700,
          color,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontSize: 18,
          color: COLORS.muted,
          lineHeight: 1.5,
        }}
      >
        {body}
      </div>
    </div>
  );
};
