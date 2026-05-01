import React from "react";
import { COLORS } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { StepBadge } from "../components/StepBadge";
import { Headline } from "../components/Headline";
import { InfoCard } from "../components/InfoCard";

export const RepoInstructionsScene: React.FC = () => {
  return (
    <SceneFrame>
      <StepBadge step="STEPS 5–6" label="Repo-Level Instructions" />
      <Headline text="Three Layers of Repo Context" size="lg" delay={0} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 24,
          marginTop: 32,
        }}
      >
        <InfoCard
          icon="📋"
          title="AGENTS.md"
          body="Critical rules, model-agnostic. Works with any AI tool."
          color={COLORS.orange}
          delay={20}
        />
        <InfoCard
          icon="🤖"
          title=".github/copilot-instructions.md"
          body="Full project context: stack, conventions, patterns."
          color={COLORS.blue}
          delay={35}
        />
        <InfoCard
          icon="📁"
          title=".github/instructions/*.md"
          body="Task-specific deep dives. Loaded alongside main instructions."
          color={COLORS.green}
          delay={50}
        />
      </div>
    </SceneFrame>
  );
};
