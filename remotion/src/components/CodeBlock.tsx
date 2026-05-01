import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, EASE_OUT } from "../constants";

export const CodeBlock: React.FC<{
  code: string;
  delay?: number;
}> = ({ code, delay = 0 }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  const translateY = interpolate(frame, [delay, delay + 20], [20, 0], {
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
        borderRadius: 8,
        padding: 24,
        fontFamily: "monospace",
        fontSize: 24,
        color: COLORS.green,
        whiteSpace: "pre",
        lineHeight: 1.6,
      }}
    >
      {code}
    </div>
  );
};
