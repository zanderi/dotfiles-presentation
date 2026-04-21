import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { InfoCard } from "../components/InfoCard";

export const ToolConfigsScene: React.FC = () => {
  const frame = useCurrentFrame();

  const insightOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const insightY = interpolate(frame, [10, 30], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <SceneFrame>
      <StepBadge step="STEP 4" label="Tool Configs" />
      <Headline text="Tool Configs: The Safety Net" size="lg" delay={0} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 32,
          marginTop: 28,
        }}
      >
        <div
          style={{
            opacity: insightOpacity,
            transform: `translateY(${insightY}px)`,
            fontFamily: FONT,
            fontSize: 24,
            color: COLORS.yellow,
          }}
        >
          "Tool configs come FIRST — before any AI instructions."
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
            icon="📐"
            title=".editorconfig"
            body="Indentation, line endings, charset. Every editor respects it."
            color={COLORS.blue}
            delay={20}
          />
          <InfoCard
            icon="✨"
            title=".prettierrc"
            body="Quote style, semicolons, print width. Auto-formats on save."
            color={COLORS.purple}
            delay={30}
          />
          <InfoCard
            icon="🔍"
            title=".eslintrc"
            body="Linting rules. Catches bugs beyond formatting."
            color={COLORS.orange}
            delay={40}
          />
          <InfoCard
            icon="⚙️"
            title="tsconfig.json"
            body="TypeScript strictness. Copilot matches your TS level."
            color={COLORS.green}
            delay={50}
          />
        </div>
      </div>
    </SceneFrame>
  );
};
