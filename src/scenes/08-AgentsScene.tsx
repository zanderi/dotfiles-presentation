import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { TwoColumn } from "../components/TwoColumn";
import { CodeBlock } from "../components/CodeBlock";
import { BulletList } from "../components/BulletList";

export const AgentsScene: React.FC = () => {
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
      <StepBadge step="STEP 7" label="Custom Agents" />
      <Headline text="Custom Agents: Specialists on Demand" size="lg" delay={0} />

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
          Create focused agents with specific tools, prompts, and constraints.
        </div>

        <TwoColumn
          left={
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  fontFamily: FONT,
                  fontSize: 22,
                  fontWeight: 700,
                  color: COLORS.text,
                }}
              >
                How to create:
              </div>
              <CodeBlock
                delay={20}
                code={`/agent → Create new agent\n# or manually:\nmkdir .github\\agents\nNew-Item my-agent.agent.md`}
              />
            </div>
          }
          right={
            <BulletList
              delay={30}
              items={[
                {
                  text: "design-system-validator — audits UI components",
                  color: COLORS.purple,
                },
                {
                  text: "api-slice-scaffolder — generates API endpoints",
                  color: COLORS.blue,
                },
                {
                  text: "bdd-scenario-runner — writes & runs BDD tests",
                  color: COLORS.green,
                },
                {
                  text: "docs-sync-writer — keeps docs up to date",
                  color: COLORS.orange,
                },
              ]}
            />
          }
        />
      </div>
    </SceneFrame>
  );
};
