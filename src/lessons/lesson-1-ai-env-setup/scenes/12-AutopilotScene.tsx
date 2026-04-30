import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { BulletList } from "../components/BulletList";

export const AutopilotScene: React.FC = () => {
  const frame = useCurrentFrame();

  const activationOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const activationY = interpolate(frame, [10, 30], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  const checklistOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const checklistY = interpolate(frame, [15, 35], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <SceneFrame>
      <StepBadge step="STEP 11" label="Autopilot Mode" />
      <Headline text="Autopilot: Autonomous Execution" size="lg" delay={0} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 28,
          marginTop: 28,
        }}
      >
        <div
          style={{
            opacity: activationOpacity,
            transform: `translateY(${activationY}px)`,
            fontFamily: "monospace",
            fontSize: 24,
            color: COLORS.blue,
          }}
        >
          Shift+Tab × 2 → Autopilot
        </div>

        <div
          style={{
            opacity: checklistOpacity,
            transform: `translateY(${checklistY}px)`,
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 700,
            color: COLORS.yellow,
          }}
        >
          Safety checklist before every autopilot run:
        </div>

        <BulletList
          delay={25}
          items={[
            {
              text: "Commit your work first (git add -A && git commit)",
              color: COLORS.yellow,
            },
            {
              text: "Use --max-autopilot-continues 10 to cap steps",
              color: COLORS.yellow,
            },
            {
              text: "Run /diff after to review all changes",
              color: COLORS.yellow,
            },
            {
              text: "Never commit autopilot output without reading it",
              color: COLORS.yellow,
            },
          ]}
        />
      </div>
    </SceneFrame>
  );
};

