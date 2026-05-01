import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";

const workflowSteps = [
  "Describe your objective",
  "Copilot generates a step-by-step plan",
  "Review — push back on anything wrong",
  "Approve only when the plan looks right",
  "\"Accept plan and build on autopilot\"",
];

const fadeSlide = (
  frame: number,
  delay: number
): { opacity: number; transform: string } => {
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const translateY = interpolate(frame, [delay, delay + 20], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  return { opacity, transform: `translateY(${translateY}px)` };
};

export const PlanModeScene: React.FC = () => {
  const frame = useCurrentFrame();

  const keyRuleOpacity = interpolate(frame, [80, 95], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const keyRuleY = interpolate(frame, [80, 100], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <SceneFrame accentColor={COLORS.yellow}>
      <StepBadge
        step="STEP 10 ⭐"
        label="The Most Important Mode"
        color={COLORS.yellow}
      />

      <div
        style={{
          ...fadeSlide(frame, 0),
          fontSize: 72,
          fontWeight: 700,
          fontFamily: FONT,
          color: COLORS.yellow,
          lineHeight: 1.2,
        }}
      >
        Plan Mode
      </div>

      <div
        style={{
          ...fadeSlide(frame, 10),
          fontSize: 34,
          fontWeight: 700,
          fontFamily: FONT,
          color: COLORS.muted,
          marginBottom: 8,
        }}
      >
        Map the work before doing it.
      </div>

      <div
        style={{
          ...fadeSlide(frame, 15),
          fontFamily: "monospace",
          fontSize: 22,
          color: COLORS.blue,
          marginBottom: 24,
        }}
      >
        Press Shift+Tab → [Plan] appears in prompt
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {workflowSteps.map((step, i) => (
          <div
            key={i}
            style={{
              ...fadeSlide(frame, 25 + i * 8),
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: FONT,
              fontSize: 26,
              color: COLORS.text,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: COLORS.yellow,
                color: COLORS.bg,
                fontWeight: 700,
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              {i + 1}
            </span>
            {step}
          </div>
        ))}
      </div>

      <div
        style={{
          opacity: keyRuleOpacity,
          transform: `translateY(${keyRuleY}px)`,
          padding: 20,
          background: COLORS.surface,
          border: `1px solid ${COLORS.orange}`,
          borderRadius: 8,
          fontFamily: FONT,
          fontSize: 22,
          color: COLORS.orange,
        }}
      >
        ⚠️ Always use Plan Mode before Autopilot or Fleet runs.
      </div>
    </SceneFrame>
  );
};

