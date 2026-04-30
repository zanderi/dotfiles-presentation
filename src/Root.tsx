import "./index.css";
import React from "react";
import { Composition } from "remotion";

// Import Lesson 1 components
import { MainVideo as MainVideoL1 } from "./MainVideo";
import { calculateMetadata as calculateMetadataL1 } from "./calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L1, VOICEOVER_SCENES as VOICEOVER_SCENES_L1 } from "./voiceover-config";

// Import Lesson 2 components
import { MainVideo as MainVideoL2 } from "./lessons/lesson-2-lessons-learned/MainVideo";
import { calculateMetadata as calculateMetadataL2 } from "./lessons/lesson-2-lessons-learned/calculateMetadata";
import { TOTAL_FRAMES as TOTAL_FRAMES_L2, VOICEOVER_SCENES as VOICEOVER_SCENES_L2 } from "./lessons/lesson-2-lessons-learned/voiceover-config";

export const RemotionRoot: React.FC = () => {
  // Render BOTH compositions - studio will show both in the dropdown
  // Use LESSON env var to determine which one renders when building/rendering
  const lesson = process.env.LESSON || "1";
  const renderLesson2 = lesson === "2";

  return (
    <>
      {/* Lesson 1: AI Dev Setup */}
      <Composition
        id="AIEnvSetup"
        component={MainVideoL1}
        calculateMetadata={calculateMetadataL1}
        durationInFrames={TOTAL_FRAMES_L1}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          sceneDurations: VOICEOVER_SCENES_L1.map((s) => s.estimatedFrames),
        }}
      />

      {/* Lesson 2: Lessons Learned */}
      <Composition
        id="LessonsLearned"
        component={MainVideoL2}
        calculateMetadata={calculateMetadataL2}
        durationInFrames={TOTAL_FRAMES_L2}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{
          sceneDurations: VOICEOVER_SCENES_L2.map((s) => s.estimatedFrames),
        }}
      />
    </>
  );
};

