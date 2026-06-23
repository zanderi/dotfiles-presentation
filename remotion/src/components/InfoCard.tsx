import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";

export const InfoCard: React.FC<{
  icon: string;
  title: string;
  body: string;
  color?: string;
  delay?: number;
  /** Optional "✓ Universal" badge for files every tool reads. */
  universal?: boolean;
  /** Optional cross-platform equivalents shown as a labeled footer row. */
  parallels?: { platform: string; path: string; color?: string }[];
  /** When false, the card takes its natural height instead of growing to fill. */
  grow?: boolean;
  /** Icon-left / text-right layout — much shorter than the default stacked card. */
  horizontal?: boolean;
}> = ({
  icon,
  title,
  body,
  color = COLORS.blue,
  delay = 0,
  universal = false,
  parallels,
  grow = true,
  horizontal = false,
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

  const content = (
    <div
      style={{
        flex: horizontal ? 1 : undefined,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontSize: 20,
          fontWeight: 700,
          color,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontSize: 18,
          color: COLORS.muted,
          lineHeight: 1.5,
        }}
      >
        {body}
      </div>

      {universal && (
        <div
          style={{
            marginTop: 4,
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: FONT,
            fontSize: 15,
          }}
        >
          <span style={{ color: COLORS.green, fontWeight: 700 }}>
            ✓ Universal
          </span>
          <span style={{ color: COLORS.muted }}>
            Copilot · Claude · Cursor all read it
          </span>
        </div>
      )}

      {parallels && parallels.length > 0 && (
        <div
          style={{
            marginTop: 12,
            paddingTop: 12,
            borderTop: `1px solid ${COLORS.border}`,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: COLORS.muted,
            }}
          >
            Same idea, other tools
          </div>
          {parallels.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 10,
              }}
            >
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: 15,
                  fontWeight: 700,
                  color: p.color ?? COLORS.text,
                  minWidth: 56,
                }}
              >
                {p.platform}
              </span>
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: 15,
                  color: COLORS.muted,
                }}
              >
                {p.path}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        background: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 12,
        padding: horizontal ? "16px 22px" : 24,
        flex: grow ? 1 : "0 0 auto",
        display: "flex",
        flexDirection: horizontal ? "row" : "column",
        alignItems: horizontal ? "center" : "stretch",
        gap: horizontal ? 18 : 8,
      }}
    >
      <div style={{ fontSize: 32, flexShrink: 0 }}>{icon}</div>
      {content}
    </div>
  );
};
