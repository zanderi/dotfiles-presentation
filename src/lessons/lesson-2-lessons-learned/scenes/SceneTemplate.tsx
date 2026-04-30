import React from "react";
import { AbsoluteFill } from "remotion";

export interface SceneTemplateProps {
  title: string;
  subtitle?: string;
  accent?: string;
  icon?: string;
}

export const SceneTemplate: React.FC<SceneTemplateProps> = ({
  title,
  subtitle,
  accent = "#d4af37",
  icon,
}) => (
  <AbsoluteFill
    style={{
      background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter, sans-serif",
      color: "#ffffff",
      padding: "80px",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* Animated background orbs */}
    <div
      style={{
        position: "absolute",
        width: "600px",
        height: "600px",
        background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
        borderRadius: "50%",
        top: "-200px",
        right: "-200px",
        zIndex: 0,
      }}
    />
    <div
      style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        background: `radial-gradient(circle, ${accent}10 0%, transparent 70%)`,
        borderRadius: "50%",
        bottom: "-150px",
        left: "-100px",
        zIndex: 0,
      }}
    />

    {/* Top accent line */}
    <div
      style={{
        position: "absolute",
        top: "60px",
        left: "80px",
        right: "80px",
        height: "2px",
        background: `linear-gradient(90deg, ${accent}80 0%, transparent 100%)`,
        zIndex: 1,
        boxShadow: `0 0 20px ${accent}40`,
      }}
    />

    {/* Content container */}
    <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
      {/* Icon if provided */}
      {icon && (
        <div
          style={{
            fontSize: "80px",
            marginBottom: "30px",
            opacity: 0.8,
          }}
        >
          {icon}
        </div>
      )}

      {/* Main title */}
      <div
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          marginBottom: "30px",
          color: accent,
          textShadow: "0 8px 32px rgba(0,0,0,0.8)",
          letterSpacing: "-1px",
          lineHeight: "1.2",
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          style={{
            fontSize: "32px",
            color: "#c0c0c0",
            maxWidth: "1200px",
            lineHeight: "1.6",
            fontWeight: "300",
            letterSpacing: "0.5px",
          }}
        >
          {subtitle}
        </div>
      )}
    </div>

    {/* Lesson indicator dots */}
    <div
      style={{
        position: "absolute",
        bottom: "80px",
        display: "flex",
        gap: "12px",
      }}
    >
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: accent,
            opacity: 0.4,
          }}
        />
      ))}
    </div>

    {/* Bottom accent line */}
    <div
      style={{
        position: "absolute",
        bottom: "60px",
        left: "80px",
        right: "80px",
        height: "1px",
        background: `linear-gradient(90deg, transparent 0%, ${accent}80 100%)`,
        zIndex: 1,
        boxShadow: `0 0 15px ${accent}40`,
      }}
    />

    {/* Corner accent elements */}
    <div
      style={{
        position: "absolute",
        top: "80px",
        left: "80px",
        width: "40px",
        height: "40px",
        border: `2px solid ${accent}`,
        opacity: 0.3,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "80px",
        right: "80px",
        width: "40px",
        height: "40px",
        border: `2px solid ${accent}`,
        opacity: 0.3,
      }}
    />
  </AbsoluteFill>
);
