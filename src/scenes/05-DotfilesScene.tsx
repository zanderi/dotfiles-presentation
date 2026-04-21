import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { TwoColumn } from "../components/TwoColumn";
import { CodeBlock } from "../components/CodeBlock";

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

const withoutItems = [
  "Re-enter all preferences",
  "Different machines drift",
  "Lost on a new install",
];

const withItems = [
  "Clone repo, run script",
  "Symlinks to ~/.copilot/",
  "Identical on every machine",
];

export const DotfilesScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame>
      <StepBadge step="STEP 3" label="Sync Across Machines" />
      <Headline text="Dotfiles: Your Config, Everywhere" size="lg" delay={0} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 32,
          marginTop: 28,
        }}
      >
        <TwoColumn
          left={
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  ...fadeSlide(frame, 10),
                  fontFamily: FONT,
                  fontSize: 26,
                  fontWeight: 700,
                  color: COLORS.text,
                }}
              >
                Without dotfiles
              </div>
              <div
                style={{
                  ...fadeSlide(frame, 15),
                  fontFamily: FONT,
                  fontSize: 20,
                  color: COLORS.muted,
                }}
              >
                Manually reconfigure on every new machine
              </div>
              {withoutItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    ...fadeSlide(frame, 20 + i * 10),
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: FONT,
                    fontSize: 22,
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
              ))}
            </div>
          }
          right={
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  ...fadeSlide(frame, 10),
                  fontFamily: FONT,
                  fontSize: 26,
                  fontWeight: 700,
                  color: COLORS.text,
                }}
              >
                With dotfiles
              </div>
              <div
                style={{
                  ...fadeSlide(frame, 15),
                  fontFamily: FONT,
                  fontSize: 20,
                  color: COLORS.muted,
                }}
              >
                git clone → ./setup.ps1 → done
              </div>
              {withItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    ...fadeSlide(frame, 20 + i * 10),
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: FONT,
                    fontSize: 22,
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
              ))}
            </div>
          }
        />

        <CodeBlock
          delay={60}
          code={`git clone https://github.com/YOU/dotfiles\n.\\setup.ps1`}
        />
      </div>
    </SceneFrame>
  );
};
