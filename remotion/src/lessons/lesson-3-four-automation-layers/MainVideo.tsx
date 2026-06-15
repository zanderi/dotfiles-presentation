import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/00-TitleScene";
import { TheQuestionScene } from "./scenes/01-TheQuestionScene";
import { Layer1InstructionsScene } from "./scenes/02-Layer1InstructionsScene";
import { Layer2SkillsScene } from "./scenes/03-Layer2SkillsScene";
import { Layer3AgentsScene } from "./scenes/04-Layer3AgentsScene";
import { Layer4HooksScene } from "./scenes/05-Layer4HooksScene";
import { KeyInsightScene } from "./scenes/06-KeyInsightScene";
import { WhereEachFitsScene } from "./scenes/07-WhereEachFitsScene";
import { SettingUpLayer4Scene } from "./scenes/08-SettingUpLayer4Scene";
import { CIIntegrationScene } from "./scenes/09-CIIntegrationScene";
import { ClosingScene } from "./scenes/10-ClosingScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	TitleScene,
	TheQuestionScene,
	Layer1InstructionsScene,
	Layer2SkillsScene,
	Layer3AgentsScene,
	Layer4HooksScene,
	KeyInsightScene,
	WhereEachFitsScene,
	SettingUpLayer4Scene,
	CIIntegrationScene,
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
							<Audio src={staticFile(`voiceover/lesson-3/${vo.id}.mp3`)} />
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
