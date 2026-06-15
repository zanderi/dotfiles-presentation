import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/00-TitleScene";
import { TheAgentFileScene } from "./scenes/01-TheAgentFileScene";
import { DescriptionFieldScene } from "./scenes/02-DescriptionFieldScene";
import { CategoryNamingScene } from "./scenes/03-CategoryNamingScene";
import { HardRulesScene } from "./scenes/04-HardRulesScene";
import { OutputFormatScene } from "./scenes/05-OutputFormatScene";
import { BuildFeedbackScene } from "./scenes/06-BuildFeedbackScene";
import { BuildGuardianScene } from "./scenes/07-BuildGuardianScene";
import { TestingAgentScene } from "./scenes/08-TestingAgentScene";
import { ValidatorsFirstScene } from "./scenes/09-ValidatorsFirstScene";
import { ContributingScene } from "./scenes/10-ContributingScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	TitleScene,
	TheAgentFileScene,
	DescriptionFieldScene,
	CategoryNamingScene,
	HardRulesScene,
	OutputFormatScene,
	BuildFeedbackScene,
	BuildGuardianScene,
	TestingAgentScene,
	ValidatorsFirstScene,
	ContributingScene,
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
							<Audio src={staticFile(`voiceover/lesson-6/${vo.id}.mp3`)} />
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
