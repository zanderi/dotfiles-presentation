import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { BulletList } from "../components/BulletList";
import { PlatformPaths } from "../components/PlatformPaths";

export const GlobalInstructionsScene: React.FC = () => {
  const frame = useCurrentFrame();

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
        <PlatformPaths
          delay={15}
          paths={[
            {
              platform: "Copilot",
              path: "~/.copilot/copilot-instructions.md",
              color: COLORS.blue,
            },
            {
              platform: "Claude",
              path: "~/.claude/CLAUDE.md",
              color: COLORS.purple,
            },
            {
              platform: "Cursor",
              path: "~/.cursorrules",
              color: COLORS.orange,
            },
            {
              platform: "ChatGPT",
              path: "Project Instructions",
              color: COLORS.green,
            },
          ]}
        />

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
          💡 This file defines who your AI assistant is for{" "}
          <span style={{ color: COLORS.text, fontWeight: 700 }}>you</span>{" "}
          — across every project, every tool, every session.
        </div>
      </div>
    </SceneFrame>
  );
};
