import React from "react";
import { AbsoluteFill } from "remotion";

const SceneTemplate: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
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
    }}
  >
    <div
      style={{
        fontSize: "64px",
        fontWeight: "bold",
        marginBottom: "40px",
        textAlign: "center",
        color: "#d4af37",
        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
      }}
    >
      {title}
    </div>
    {subtitle && (
      <div
        style={{
          fontSize: "36px",
          color: "#b0b0b0",
          textAlign: "center",
          maxWidth: "1400px",
          lineHeight: "1.4",
        }}
      >
        {subtitle}
      </div>
    )}
  </AbsoluteFill>
);

export const IntroductionScene: React.FC = () => (
  <SceneTemplate
    title="Lessons Learned in AI-Assisted Development"
    subtitle="Building systems with AI agents: lessons from the field"
  />
);

export const ModelSelectionScene: React.FC = () => (
  <SceneTemplate
    title="Lesson 1: Model Selection Matters"
    subtitle="Sonnet vs. Opus: The cost of cheap execution"
  />
);

export const TestingStrategyScene: React.FC = () => (
  <SceneTemplate
    title="Lesson 2: Specialized Testing Agents"
    subtitle="Different agents catch different bugs"
  />
);

export const PlannedVsReactiveScene: React.FC = () => (
  <SceneTemplate
    title="Lesson 3: Planned vs. Reactive Execution"
    subtitle="Planning beats troubleshooting"
  />
);

export const ComponentizationScene: React.FC = () => (
  <SceneTemplate
    title="Lesson 4: Design Systems Upfront"
    subtitle="Define components before implementation"
  />
);

export const ConductorThinkingScene: React.FC = () => (
  <SceneTemplate
    title="Lesson 5: Think Like a Conductor"
    subtitle="From expert to orchestrator"
  />
);

export const ProjectSetupScene: React.FC = () => (
  <SceneTemplate
    title="Lesson 6: Automate Best Practices"
    subtitle="Project Initialization & Review Agents"
  />
);

export const BestPracticesScene: React.FC = () => (
  <SceneTemplate
    title="Best Practices & Resilience"
    subtitle="Circuit breakers, versioning, metrics, validation"
  />
);

export const ClosingScene: React.FC = () => (
  <SceneTemplate
    title="Key Takeaways"
    subtitle="9 lessons for your next project"
  />
);
