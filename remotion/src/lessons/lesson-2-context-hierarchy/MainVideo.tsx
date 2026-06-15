import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/00-TitleScene";
import { TheStackScene } from "./scenes/01-TheStackScene";
import { GlobalConfigScene } from "./scenes/02-GlobalConfigScene";
import { AgentsMdScene } from "./scenes/03-AgentsMdScene";
import { RepoInstructionsScene } from "./scenes/04-RepoInstructionsScene";
import { TaskInstructionsScene } from "./scenes/05-TaskInstructionsScene";
import { ToolConfigsScene } from "./scenes/06-ToolConfigsScene";
import { SafetyNetScene } from "./scenes/07-SafetyNetScene";
import { InstructionsLikeCodeScene } from "./scenes/08-InstructionsLikeCodeScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	TitleScene,
	TheStackScene,
	GlobalConfigScene,
	AgentsMdScene,
	RepoInstructionsScene,
	TaskInstructionsScene,
	ToolConfigsScene,
	SafetyNetScene,
	InstructionsLikeCodeScene,
] as const;

export const MainVideo: React.FC<MainVideoProps> = ({ sceneDurations }) => (
	<TransitionSeries>
		{SCENES.map((SceneComponent, i) => {
			const vo = VOICEOVER_SCENES[i];
			const duration = sceneDurations[i] ?? vo.estimatedFrames;
			return (
				<React.Fragment key={vo.id}>
					<TransitionSeries.Sequence durationInFrames={duration}>
						<SceneComponent />
						{AUDIO_ENABLED && (
							<Audio src={staticFile(`voiceover/lesson-2b/${vo.id}.mp3`)} />
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
