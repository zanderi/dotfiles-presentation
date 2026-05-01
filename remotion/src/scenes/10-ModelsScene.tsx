import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { InfoCard } from "../components/InfoCard";

export const ModelsScene: React.FC = () => {
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

  const switchOpacity = interpolate(frame, [60, 75], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <SceneFrame>
      <StepBadge step="STEP 9" label="Model Selection" />
      <Headline text="Pick the Right Model for the Job" size="lg" delay={0} />

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
            fontSize: 22,
            color: COLORS.muted,
          }}
        >
          Models have premium request multipliers — choose wisely.
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            gap: 24,
          }}
        >
          <InfoCard
            icon="⚡"
            title="Lightweight (0.25×)"
            body="Haiku, GPT-4.1, GPT-5 mini. Simple tasks, fast & cheap."
            color={COLORS.green}
            delay={20}
          />
          <InfoCard
            icon="🎯"
            title="Standard (1×)"
            body="Sonnet, GPT-5.2. Most daily work. Best value."
            color={COLORS.blue}
            delay={35}
          />
          <InfoCard
            icon="🧠"
            title="Heavy (5×)"
            body="Opus, GPT-5.3 Codex. Complex architecture, deep analysis."
            color={COLORS.purple}
            delay={50}
          />
        </div>

        <div
          style={{
            opacity: switchOpacity,
            fontFamily: FONT,
            fontSize: 20,
            color: COLORS.muted,
          }}
        >
          Switch anytime:{" "}
          <span
            style={{ fontFamily: "monospace", color: COLORS.blue }}
          >
            /model
          </span>
        </div>
      </div>
    </SceneFrame>
  );
};
