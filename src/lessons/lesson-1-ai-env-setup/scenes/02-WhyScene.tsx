import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";

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

const uncustomizedItems = [
  "Wrong naming conventions",
  "Wrong framework patterns",
  "Generic suggestions",
  "Doesn't know your stack",
];

const customizedItems = [
  "Follows your conventions",
  "Uses your patterns",
  "Knows your architecture",
  "Teaches as it works",
];

export const WhyScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame>
      <StepBadge step="WHY" label="Customization Changes Everything" />
      <Headline text="Generic → Expert" size="lg" delay={0} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
          gap: 60,
          marginTop: 32,
        }}
      >
        {/* LEFT — Uncustomized */}
        <div
          style={{
            ...fadeSlide(frame, 10),
            flex: 1,
            background: COLORS.surface,
            border: `1px solid ${COLORS.red}`,
            borderRadius: 12,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 700,
              color: COLORS.red,
            }}
          >
            ❌ Uncustomized
          </div>
          {uncustomizedItems.map((item, i) => {
            const d = 20 + i * 10;
            return (
              <div
                key={i}
                style={{
                  ...fadeSlide(frame, d),
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: FONT,
                  fontSize: 24,
                  color: COLORS.muted,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: COLORS.red,
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            );
          })}
        </div>

        {/* RIGHT — Customized */}
        <div
          style={{
            ...fadeSlide(frame, 20),
            flex: 1,
            background: COLORS.surface,
            border: `1px solid ${COLORS.green}`,
            borderRadius: 12,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 28,
              fontWeight: 700,
              color: COLORS.green,
            }}
          >
            ✅ Customized
          </div>
          {customizedItems.map((item, i) => {
            const d = 30 + i * 10;
            return (
              <div
                key={i}
                style={{
                  ...fadeSlide(frame, d),
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  fontFamily: FONT,
                  fontSize: 24,
                  color: COLORS.text,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: COLORS.green,
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </SceneFrame>
  );
};

