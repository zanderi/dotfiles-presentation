import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { TwoColumn } from "../components/TwoColumn";
import { BulletList } from "../components/BulletList";

const PLATFORMS = [
  {
    name: "Copilot",
    color: COLORS.blue,
    cmd: "/agent",
    path: ".github/agents/*.agent.md",
  },
  {
    name: "Claude",
    color: COLORS.purple,
    cmd: "/agents",
    path: ".claude/agents/*.md",
  },
  {
    name: "Cursor",
    color: COLORS.orange,
    cmd: "rules",
    path: ".cursor/rules/*.mdc",
  },
] as const;

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
                How to create — same idea, each tool:
              </div>
              {PLATFORMS.map((p, i) => {
                const delay = 20 + i * 12;
                const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
                  extrapolateRight: "clamp",
                  extrapolateLeft: "clamp",
                  easing: EASE_OUT,
                });
                const translateY = interpolate(
                  frame,
                  [delay, delay + 20],
                  [20, 0],
                  {
                    extrapolateRight: "clamp",
                    extrapolateLeft: "clamp",
                    easing: EASE_OUT,
                  }
                );
                return (
                  <div
                    key={p.name}
                    style={{
                      opacity,
                      transform: `translateY(${translateY}px)`,
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      paddingLeft: 12,
                      borderLeft: `3px solid ${p.color}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 10,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: FONT,
                          fontSize: 19,
                          fontWeight: 700,
                          color: p.color,
                          minWidth: 76,
                        }}
                      >
                        {p.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "monospace",
                          fontSize: 16,
                          color: COLORS.text,
                          background: COLORS.surface,
                          border: `1px solid ${COLORS.border}`,
                          borderRadius: 6,
                          padding: "2px 8px",
                        }}
                      >
                        {p.cmd}
                      </span>
                    </div>
                    <div
                      style={{
                        fontFamily: "monospace",
                        fontSize: 15,
                        color: COLORS.muted,
                      }}
                    >
                      {p.path}
                    </div>
                  </div>
                );
              })}
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
