import React from "react";
import { COLORS } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { CodeBlock } from "../components/CodeBlock";
import { BulletList } from "../components/BulletList";

export const InstallScene: React.FC = () => {
  return (
    <SceneFrame>
      <StepBadge step="STEP 1" label="Install & Authenticate" />
      <Headline text="Install & Authenticate" size="lg" delay={0} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 40,
          marginTop: 32,
        }}
      >
        <CodeBlock
          delay={10}
          code={`winget install GitHub.Copilot\ncopilot\n/login`}
        />

        <BulletList
          delay={40}
          items={[
            { text: "One-time setup per machine" },
            { text: "Authenticate once with GitHub", color: COLORS.green },
            { text: "Available in any terminal session" },
          ]}
        />
      </div>
    </SceneFrame>
  );
};

