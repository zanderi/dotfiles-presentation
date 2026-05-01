import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { BulletList } from "../components/BulletList";

export const GlobalInstructionsScene: React.FC = () => {
  const frame = useCurrentFrame();

  const pathOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const pathY = interpolate(frame, [15, 35], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <SceneFrame>
      <StepBadge step="STEP 2" label="Global Personal Config" />
      <Headline text="Your Global Identity File" size="lg" delay={0} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 32,
          marginTop: 32,
        }}
      >
        <div
          style={{
            opacity: pathOpacity,
            transform: `translateY(${pathY}px)`,
            fontFamily: "monospace",
            fontSize: 26,
            color: COLORS.blue,
          }}
        >
          ~/.copilot/copilot-instructions.md
        </div>

        <BulletList
          delay={30}
          items={[
            { text: "Preferred languages & frameworks" },
            {
              text: "Code style: tabs, async/await, naming conventions",
              color: COLORS.purple,
            },
            {
              text: "Communication preferences: explain your reasoning",
              color: COLORS.orange,
            },
            {
              text: 'Agent identity: "Your name is Atlas"',
              color: COLORS.blue,
            },
            {
              text: "Security policies: never commit secrets",
              color: COLORS.yellow,
            },
          ]}
        />

        <div
          style={{
            marginTop: 8,
            padding: 20,
            background: COLORS.surface,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 8,
            fontFamily: FONT,
            fontSize: 20,
            color: COLORS.muted,
            opacity: interpolate(frame, [70, 85], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
              easing: EASE_OUT,
            }),
          }}
        >
          💡 This file defines who Copilot is for{" "}
          <span style={{ color: COLORS.text, fontWeight: 700 }}>you</span>{" "}
          — across every project, every session.
        </div>
      </div>
    </SceneFrame>
  );
};

