import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/00-TitleScene";
import { WhySpecialistsScene } from "./scenes/01-WhySpecialistsScene";
import { OrchestratorScene } from "./scenes/02-OrchestratorScene";
import { PlannersScene } from "./scenes/03-PlannersScene";
import { LearnersScene } from "./scenes/04-LearnersScene";
import { DoersScene } from "./scenes/05-DoersScene";
import { FeedbackScene } from "./scenes/06-FeedbackScene";
import { GuardiansScene } from "./scenes/07-GuardiansScene";
import { ToolOperatorsScene } from "./scenes/08-ToolOperatorsScene";
import { PresentersScene } from "./scenes/09-PresentersScene";
import { PipelineScene } from "./scenes/10-PipelineScene";
import { WhereAgentsLiveScene } from "./scenes/11-WhereAgentsLiveScene";
import { ConductorThinkingScene } from "./scenes/12-ConductorThinkingScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	TitleScene,
	WhySpecialistsScene,
	OrchestratorScene,
	PlannersScene,
	LearnersScene,
	DoersScene,
	FeedbackScene,
	GuardiansScene,
	ToolOperatorsScene,
	PresentersScene,
	PipelineScene,
	WhereAgentsLiveScene,
	ConductorThinkingScene,
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
							<Audio src={staticFile(`voiceover/lesson-4/${vo.id}.mp3`)} />
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
