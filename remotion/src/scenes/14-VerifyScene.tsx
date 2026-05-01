import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { InfoCard } from "../components/InfoCard";

const commands = [
  { cmd: "/instructions", desc: "loaded instruction files" },
  { cmd: "/env", desc: "full environment details" },
  { cmd: "/skills list", desc: "loaded skills" },
  { cmd: "/agent", desc: "available agents" },
  { cmd: "/model", desc: "current model + multiplier" },
  { cmd: "/mcp show", desc: "connected MCP servers" },
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
  const translateY = interpolate(frame, [delay, delay + 20], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  return { opacity, transform: `translateY(${translateY}px)` };
};

export const VerifyScene: React.FC = () => {
  const frame = useCurrentFrame();

  const finalOpacity = interpolate(frame, [100, 115], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const finalY = interpolate(frame, [100, 120], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <SceneFrame accentColor={COLORS.green}>
      <StepBadge step="STEP 13" label="Verify Your Setup" color={COLORS.green} />
      <Headline text="Verify Everything" size="lg" delay={0} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: 60,
          marginTop: 28,
        }}
      >
        {/* LEFT — Commands */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {commands.map((item, i) => (
            <div
              key={i}
              style={{
                ...fadeSlide(frame, 10 + i * 8),
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                fontFamily: FONT,
                fontSize: 22,
              }}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  color: COLORS.blue,
                  minWidth: 200,
                  flexShrink: 0,
                }}
              >
                {item.cmd}
              </span>
              <span style={{ color: COLORS.muted }}>— {item.desc}</span>
            </div>
          ))}
        </div>

        {/* RIGHT — Modes */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              ...fadeSlide(frame, 10),
              fontFamily: FONT,
              fontSize: 32,
              fontWeight: 700,
              color: COLORS.blue,
              marginBottom: 8,
            }}
          >
            Modes
          </div>

          <InfoCard
            icon="💬"
            title="Interactive"
            body="Default, step-by-step"
            color={COLORS.text}
            delay={20}
          />
          <InfoCard
            icon="🗺️"
            title="Plan"
            body="Shift+Tab, map before building"
            color={COLORS.yellow}
            delay={30}
          />
          <InfoCard
            icon="🤖"
            title="Autopilot"
            body="Shift+Tab×2, autonomous"
            color={COLORS.blue}
            delay={40}
          />
          <InfoCard
            icon="🚀"
            title="Fleet"
            body="/fleet, parallel subagents"
            color={COLORS.purple}
            delay={50}
          />
        </div>
      </div>

      <div
        style={{
          opacity: finalOpacity,
          transform: `translateY(${finalY}px)`,
          fontFamily: FONT,
          fontSize: 28,
          fontWeight: 700,
          color: COLORS.green,
          textAlign: "center",
          marginTop: 16,
        }}
      >
        ✅ You're ready. Go build something incredible.
      </div>
    </SceneFrame>
  );
};
