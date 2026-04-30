import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = (delay: number) =>
    interpolate(frame, [delay, delay + 15], [0, 1], {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: EASE_OUT,
    });

  const slideUp = (delay: number) =>
    interpolate(frame, [delay, delay + 20], [30, 0], {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
      easing: EASE_OUT,
    });

  return (
    <SceneFrame>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            opacity: fadeIn(0),
            transform: `translateY(${slideUp(0)}px)`,
            fontSize: 88,
            fontWeight: 700,
            fontFamily: FONT,
            color: COLORS.blue,
          }}
        >
          AI Dev Setup
        </div>

        <div
          style={{
            opacity: fadeIn(15),
            transform: `translateY(${slideUp(15)}px)`,
            fontSize: 48,
            fontWeight: 700,
            fontFamily: FONT,
            color: COLORS.text,
          }}
        >
          Getting the Most Out of Copilot
        </div>

        <div
          style={{
            opacity: fadeIn(30),
            transform: `translateY(${slideUp(30)}px)`,
            fontSize: 28,
            fontFamily: FONT,
            color: COLORS.muted,
          }}
        >
          13 steps to build your perfect AI environment
        </div>
      </div>

      <div
        style={{
          opacity: fadeIn(45),
          fontFamily: FONT,
          fontSize: 16,
          color: COLORS.muted,
          alignSelf: "flex-end",
        }}
      >
        GitHub Copilot CLI
      </div>
    </SceneFrame>
  );
};

