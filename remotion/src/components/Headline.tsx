import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";

const SIZE_MAP = { xl: 72, lg: 52, md: 38 } as const;

export const Headline: React.FC<{
  text: string;
  delay?: number;
  size?: "xl" | "lg" | "md";
  color?: string;
}> = ({ text, delay = 0, size = "lg", color = COLORS.text }) => {
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
        fontSize: SIZE_MAP[size],
        fontWeight: 700,
        fontFamily: FONT,
        color,
        lineHeight: 1.2,
      }}
    >
      {text}
    </div>
  );
};
