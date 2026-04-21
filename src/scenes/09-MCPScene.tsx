import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { BulletList } from "../components/BulletList";
import { CodeBlock } from "../components/CodeBlock";

export const MCPScene: React.FC = () => {
  const frame = useCurrentFrame();

  const keyOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });
  const keyY = interpolate(frame, [10, 30], [20, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: EASE_OUT,
  });

  return (
    <SceneFrame>
      <StepBadge step="STEP 8" label="MCP Servers" />
      <Headline text="MCP: Natural Language Data Access" size="lg" delay={0} />

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
            opacity: keyOpacity,
            transform: `translateY(${keyY}px)`,
            fontFamily: FONT,
            fontSize: 24,
            color: COLORS.green,
          }}
        >
          GitHub MCP is built-in — no setup needed.
        </div>

        <BulletList
          delay={20}
          items={[
            { text: "Query issues, PRs, and code via natural language" },
            { text: "Add custom servers: /mcp add", color: COLORS.blue },
            {
              text: "Per-user: ~/.copilot/mcp-config.json",
              color: COLORS.purple,
            },
            {
              text: "Per-project: .copilot/mcp-config.json",
              color: COLORS.purple,
            },
          ]}
        />

        <CodeBlock
          delay={50}
          code={`/mcp show        — list all servers\n/mcp add         — connect a new server\n/mcp disable X   — temporarily disable`}
        />
      </div>
    </SceneFrame>
  );
};
