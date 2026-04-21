import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/01-TitleScene";
import { WhyScene } from "./scenes/02-WhyScene";
import { InstallScene } from "./scenes/03-InstallScene";
import { GlobalInstructionsScene } from "./scenes/04-GlobalInstructionsScene";
import { DotfilesScene } from "./scenes/05-DotfilesScene";
import { ToolConfigsScene } from "./scenes/06-ToolConfigsScene";
import { RepoInstructionsScene } from "./scenes/07-RepoInstructionsScene";
import { AgentsScene } from "./scenes/08-AgentsScene";
import { MCPScene } from "./scenes/09-MCPScene";
import { ModelsScene } from "./scenes/10-ModelsScene";
import { PlanModeScene } from "./scenes/11-PlanModeScene";
import { AutopilotScene } from "./scenes/12-AutopilotScene";
import { FleetScene } from "./scenes/13-FleetScene";
import { VerifyScene } from "./scenes/14-VerifyScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
  TitleScene,
  WhyScene,
  InstallScene,
  GlobalInstructionsScene,
  DotfilesScene,
  ToolConfigsScene,
  RepoInstructionsScene,
  AgentsScene,
  MCPScene,
  ModelsScene,
  PlanModeScene,
  AutopilotScene,
  FleetScene,
  VerifyScene,
] as const;

export const MainVideo: React.FC<MainVideoProps> = ({ sceneDurations }) => (
  <TransitionSeries>
    {SCENES.map((SceneComponent, i) => {
      const vo = VOICEOVER_SCENES[i];
      // Use duration from calculateMetadata (actual audio length + padding)
      const duration = sceneDurations[i] ?? vo.estimatedFrames;
      return (
        <React.Fragment key={vo.id}>
          <TransitionSeries.Sequence durationInFrames={duration}>
            <SceneComponent />
            {AUDIO_ENABLED && (
              <Audio src={staticFile(`voiceover/${vo.id}.mp3`)} />
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
