import "./index.css";
import React from "react";
import { Composition } from "remotion";

// Lesson 1
import { MainVideo as MainVideoL1 } from "./MainVideo";
import { calculateMetadata as calculateMetadataL1 } from "./calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L1, VOICEOVER_SCENES as VOICEOVER_SCENES_L1 } from "./voiceover-config";

// Lesson 2b — Context Hierarchy
import { MainVideo as MainVideoL2b } from "./lessons/lesson-2-context-hierarchy/MainVideo";
import { calculateMetadata as calculateMetadataL2b } from "./lessons/lesson-2-context-hierarchy/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L2b, VOICEOVER_SCENES as VOICEOVER_SCENES_L2b } from "./lessons/lesson-2-context-hierarchy/voiceover-config";

// Lesson 0
import { MainVideo as MainVideoL0 } from "./lessons/lesson-0-upgrade-guide/MainVideo";
import { calculateMetadata as calculateMetadataL0 } from "./lessons/lesson-0-upgrade-guide/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L0, VOICEOVER_SCENES as VOICEOVER_SCENES_L0 } from "./lessons/lesson-0-upgrade-guide/voiceover-config";

// Lesson 3
import { MainVideo as MainVideoL3 } from "./lessons/lesson-3-four-automation-layers/MainVideo";
import { calculateMetadata as calculateMetadataL3 } from "./lessons/lesson-3-four-automation-layers/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L3, VOICEOVER_SCENES as VOICEOVER_SCENES_L3 } from "./lessons/lesson-3-four-automation-layers/voiceover-config";

// Lesson 4
import { MainVideo as MainVideoL4 } from "./lessons/lesson-4-agent-ecosystem/MainVideo";
import { calculateMetadata as calculateMetadataL4 } from "./lessons/lesson-4-agent-ecosystem/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L4, VOICEOVER_SCENES as VOICEOVER_SCENES_L4 } from "./lessons/lesson-4-agent-ecosystem/voiceover-config";

// Lesson 5
import { MainVideo as MainVideoL5 } from "./lessons/lesson-5-content-types/MainVideo";
import { calculateMetadata as calculateMetadataL5 } from "./lessons/lesson-5-content-types/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L5, VOICEOVER_SCENES as VOICEOVER_SCENES_L5 } from "./lessons/lesson-5-content-types/voiceover-config";

// Lesson 6
import { MainVideo as MainVideoL6 } from "./lessons/lesson-6-building-agents/MainVideo";
import { calculateMetadata as calculateMetadataL6 } from "./lessons/lesson-6-building-agents/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L6, VOICEOVER_SCENES as VOICEOVER_SCENES_L6 } from "./lessons/lesson-6-building-agents/voiceover-config";

// Lesson 7
import { MainVideo as MainVideoL7 } from "./lessons/lesson-7-workflow-gitflow/MainVideo";
import { calculateMetadata as calculateMetadataL7 } from "./lessons/lesson-7-workflow-gitflow/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L7, VOICEOVER_SCENES as VOICEOVER_SCENES_L7 } from "./lessons/lesson-7-workflow-gitflow/voiceover-config";

// Lesson 8
import { MainVideo as MainVideoL8 } from "./lessons/lesson-8-skills-and-mcp/MainVideo";
import { calculateMetadata as calculateMetadataL8 } from "./lessons/lesson-8-skills-and-mcp/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L8, VOICEOVER_SCENES as VOICEOVER_SCENES_L8 } from "./lessons/lesson-8-skills-and-mcp/voiceover-config";

// Lesson 9
import { MainVideo as MainVideoL9 } from "./lessons/lesson-9-project-setup/MainVideo";
import { calculateMetadata as calculateMetadataL9 } from "./lessons/lesson-9-project-setup/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L9, VOICEOVER_SCENES as VOICEOVER_SCENES_L9 } from "./lessons/lesson-9-project-setup/voiceover-config";

// Lesson 10
import { MainVideo as MainVideoL10 } from "./lessons/lesson-10-business-ecosystem/MainVideo";
import { calculateMetadata as calculateMetadataL10 } from "./lessons/lesson-10-business-ecosystem/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L10, VOICEOVER_SCENES as VOICEOVER_SCENES_L10 } from "./lessons/lesson-10-business-ecosystem/voiceover-config";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition id="UpgradeGuide" component={MainVideoL0} calculateMetadata={calculateMetadataL0} durationInFrames={TOTAL_FRAMES_L0} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L0.map((s) => s.estimatedFrames) }} />
      <Composition id="AIEnvSetup" component={MainVideoL1} calculateMetadata={calculateMetadataL1} durationInFrames={TOTAL_FRAMES_L1} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L1.map((s) => s.estimatedFrames) }} />
      <Composition id="ContextHierarchy" component={MainVideoL2b} calculateMetadata={calculateMetadataL2b} durationInFrames={TOTAL_FRAMES_L2b} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L2b.map((s) => s.estimatedFrames) }} />
      <Composition id="FourAutomationLayers" component={MainVideoL3} calculateMetadata={calculateMetadataL3} durationInFrames={TOTAL_FRAMES_L3} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L3.map((s) => s.estimatedFrames) }} />
      <Composition id="AgentEcosystem" component={MainVideoL4} calculateMetadata={calculateMetadataL4} durationInFrames={TOTAL_FRAMES_L4} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L4.map((s) => s.estimatedFrames) }} />
      <Composition id="ContentTypes" component={MainVideoL5} calculateMetadata={calculateMetadataL5} durationInFrames={TOTAL_FRAMES_L5} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L5.map((s) => s.estimatedFrames) }} />
      <Composition id="BuildingAgents" component={MainVideoL6} calculateMetadata={calculateMetadataL6} durationInFrames={TOTAL_FRAMES_L6} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L6.map((s) => s.estimatedFrames) }} />
      <Composition id="WorkflowGitflow" component={MainVideoL7} calculateMetadata={calculateMetadataL7} durationInFrames={TOTAL_FRAMES_L7} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L7.map((s) => s.estimatedFrames) }} />
      <Composition id="SkillsAndMcp" component={MainVideoL8} calculateMetadata={calculateMetadataL8} durationInFrames={TOTAL_FRAMES_L8} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L8.map((s) => s.estimatedFrames) }} />
      <Composition id="ProjectSetup" component={MainVideoL9} calculateMetadata={calculateMetadataL9} durationInFrames={TOTAL_FRAMES_L9} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L9.map((s) => s.estimatedFrames) }} />
      <Composition id="BusinessEcosystem" component={MainVideoL10} calculateMetadata={calculateMetadataL10} durationInFrames={TOTAL_FRAMES_L10} fps={30} width={1920} height={1080} defaultProps={{ sceneDurations: VOICEOVER_SCENES_L10.map((s) => s.estimatedFrames) }} />
    </>
  );
};

