import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/00-TitleScene";
import { FiveTypesScene } from "./scenes/01-FiveTypesScene";
import { DecisionTreeScene } from "./scenes/02-DecisionTreeScene";
import { AgentDeepDiveScene } from "./scenes/03-AgentDeepDiveScene";
import { WorkflowAgentScene } from "./scenes/04-WorkflowAgentScene";
import { InstructionFileScene } from "./scenes/05-InstructionFileScene";
import { SkillScene } from "./scenes/06-SkillScene";
import { PromptTemplateScene } from "./scenes/07-PromptTemplateScene";
import { WorkflowAgentLiveScene } from "./scenes/08-WorkflowAgentLiveScene";
import { ClosingScene } from "./scenes/09-ClosingScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	TitleScene,
	FiveTypesScene,
	DecisionTreeScene,
	AgentDeepDiveScene,
	WorkflowAgentScene,
	InstructionFileScene,
	SkillScene,
	PromptTemplateScene,
	WorkflowAgentLiveScene,
	ClosingScene,
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
							<Audio src={staticFile(`voiceover/lesson-5/${vo.id}.mp3`)} />
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
