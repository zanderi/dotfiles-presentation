import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";

export const BulletList: React.FC<{
  items: Array<{ text: string; color?: string }>;
  delay?: number;
}> = ({ items, delay = 0 }) => {
  const frame = useCurrentFrame();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map((item, i) => {
        const itemDelay = delay + i * 10;

        const opacity = interpolate(
          frame,
          [itemDelay, itemDelay + 15],
          [0, 1],
          {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: EASE_OUT,
          }
        );

        const translateY = interpolate(
          frame,
          [itemDelay, itemDelay + 20],
          [30, 0],
          {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
            easing: EASE_OUT,
          }
        );

        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              opacity,
              transform: `translateY(${translateY}px)`,
              fontFamily: FONT,
              fontSize: 28,
              color: COLORS.text,
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: item.color ?? COLORS.blue,
                flexShrink: 0,
              }}
            />
            {item.text}
          </div>
        );
      })}
    </div>
  );
};
