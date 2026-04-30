import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { CodeBlock } from "../components/CodeBlock";
import { BulletList } from "../components/BulletList";

export const FleetScene: React.FC = () => {
  const frame = useCurrentFrame();

  const bodyOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const bodyY = interpolate(frame, [10, 30], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <SceneFrame>
      <StepBadge step="STEP 12" label="Fleet Mode" />
      <Headline text="Fleet: Parallel Subagents" size="lg" delay={0} />

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
            opacity: bodyOpacity,
            transform: `translateY(${bodyY}px)`,
            fontFamily: FONT,
            fontSize: 24,
            color: COLORS.muted,
          }}
        >
          Split large tasks into parallel tracks. Each subagent owns its scope.
        </div>

        <CodeBlock
          delay={20}
          code={`/fleet Break this into 3 parallel tracks:\n  1. Backend API — src/api/\n  2. Frontend UI — src/components/\n  3. Tests — src/tests/ (depends on 1+2)`}
        />

        <BulletList
          delay={60}
          items={[
            { text: "Monitor progress with /tasks", color: COLORS.blue },
            {
              text: "Combine with Plan Mode for maximum control",
              color: COLORS.purple,
            },
            {
              text: "Each track is isolated — no cross-scope writes",
              color: COLORS.green,
            },
          ]}
        />
      </div>
    </SceneFrame>
  );
};

