import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/00-TitleScene";
import { RecapScene } from "./scenes/01-RecapScene";
import { SkillsStructureScene } from "./scenes/02-SkillsStructureScene";
import { SkillsDescriptionScene } from "./scenes/03-SkillsDescriptionScene";
import { SkillsScriptsScene } from "./scenes/04-SkillsScriptsScene";
import { SkillSecurityScene } from "./scenes/05-SkillSecurityScene";
import { BuildSkillScene } from "./scenes/06-BuildSkillScene";
import { MCPWhatItIsScene } from "./scenes/07-MCPWhatItIsScene";
import { GitHubMCPScene } from "./scenes/08-GitHubMCPScene";
import { AddingMCPScene } from "./scenes/09-AddingMCPScene";
import { MCPSecurityScene } from "./scenes/10-MCPSecurityScene";
import { DecisionMatrixScene } from "./scenes/11-DecisionMatrixScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	TitleScene,
	RecapScene,
	SkillsStructureScene,
	SkillsDescriptionScene,
	SkillsScriptsScene,
	SkillSecurityScene,
	BuildSkillScene,
	MCPWhatItIsScene,
	GitHubMCPScene,
	AddingMCPScene,
	MCPSecurityScene,
	DecisionMatrixScene,
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
							<Audio src={staticFile(`voiceover/lesson-8/${vo.id}.mp3`)} />
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
