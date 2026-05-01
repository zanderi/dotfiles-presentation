import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { IntroductionScene } from "./scenes/01-IntroductionScene";
import { ModelSelectionScene } from "./scenes/02-ModelSelectionScene";
import { TestingStrategyScene } from "./scenes/03-TestingStrategyScene";
import { PlannedVsReactiveScene } from "./scenes/04-PlannedVsReactiveScene";
import { ComponentizationScene } from "./scenes/05-ComponentizationScene";
import { ConductorThinkingScene } from "./scenes/06-ConductorThinkingScene";
import { ProjectSetupScene } from "./scenes/07-ProjectSetupScene";
import { BestPracticesScene } from "./scenes/08-BestPracticesScene";
import { ClosingScene } from "./scenes/09-ClosingScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
  IntroductionScene,
  ModelSelectionScene,
  TestingStrategyScene,
  PlannedVsReactiveScene,
  ComponentizationScene,
  ConductorThinkingScene,
  ProjectSetupScene,
  BestPracticesScene,
  ClosingScene,
] as const;

export const MainVideo: React.FC<MainVideoProps> = ({ sceneDurations }) => (
  <TransitionSeries>
    {SCENES.map((SceneComponent, i) => {
      const vo = VOICEOVER_SCENES[i];
      // Use duration from calculateMetadata (actual audio length + padding)
      // or fall back to estimate if audio not yet generated
      const duration = sceneDurations[i] ?? vo.estimatedFrames;
      return (
        <React.Fragment key={vo.id}>
          <TransitionSeries.Sequence durationInFrames={duration}>
            <SceneComponent />
            {AUDIO_ENABLED && (
              <Audio src={staticFile(`voiceover/lesson-2/${vo.id}.mp3`)} />
            )}
          </TransitionSeries.Sequence>
          {i < SCENES.length - 1 && (
            <TransitionSeries.Transition
              timing={TRANSITION}
              presentation={PRES}
            />
          )}
        </React.Fragment>
      );
    })}
  </TransitionSeries>
);
