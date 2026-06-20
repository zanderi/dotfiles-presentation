import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";

const TIERS = [
  {
    icon: "⚡",
    title: "Lightweight",
    multiplier: "0.25×",
    subtitle: "Simple, repetitive tasks — fast & cheap",
    models: ["Haiku", "GPT mini", "Gemini Flash"],
    color: COLORS.green,
  },
  {
    icon: "🎯",
    title: "Standard",
    multiplier: "1×",
    subtitle: "Most daily work — best value",
    models: ["Sonnet", "GPT", "Gemini Pro"],
    color: COLORS.blue,
  },
  {
    icon: "🧠",
    title: "Heavy",
    multiplier: "5×",
    subtitle: "Complex architecture & deep analysis",
    models: ["Opus", "GPT Codex", "Gemini Deep Think"],
    color: COLORS.purple,
  },
] as const;

const ModelCard: React.FC<{ tier: (typeof TIERS)[number]; delay: number }> = ({
  tier,
  delay,
}) => {
  const frame = useCurrentFrame();
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

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 12,
        padding: 24,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div style={{ fontSize: 32 }}>{tier.icon}</div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          fontFamily: FONT,
        }}
      >
        <span style={{ fontSize: 24, fontWeight: 700, color: tier.color }}>
          {tier.title}
        </span>
        <span style={{ fontSize: 18, fontWeight: 700, color: COLORS.muted }}>
          {tier.multiplier}
        </span>
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontSize: 17,
          color: COLORS.muted,
          lineHeight: 1.4,
        }}
      >
        {tier.subtitle}
      </div>
      <div
        style={{
          marginTop: 8,
          paddingTop: 14,
          borderTop: `1px solid ${COLORS.border}`,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {tier.models.map((m) => (
          <div
            key={m}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "monospace",
              fontSize: 20,
              color: COLORS.text,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: tier.color,
                flexShrink: 0,
              }}
            />
            {m}
          </div>
        ))}
      </div>
    </div>
  );
};

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
          <ModelCard tier={TIERS[0]} delay={20} />
          <ModelCard tier={TIERS[1]} delay={35} />
          <ModelCard tier={TIERS[2]} delay={50} />
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
