import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/00-TitleScene";
import { SameStructureScene } from "./scenes/01-SameStructureScene";
import { ThemisScene } from "./scenes/02-ThemisScene";
import { LearnerLayerScene } from "./scenes/03-LearnerLayerScene";
import { DoerLayerScene } from "./scenes/04-DoerLayerScene";
import { FeedbackScene } from "./scenes/05-FeedbackScene";
import { GuardiansScene } from "./scenes/06-GuardiansScene";
import { ToolOperatorsScene } from "./scenes/07-ToolOperatorsScene";
import { TheBridgeScene } from "./scenes/08-TheBridgeScene";
import { AtlasThemisScene } from "./scenes/09-AtlasThemisScene";
import { ClosingScene } from "./scenes/10-ClosingScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	TitleScene,
	SameStructureScene,
	ThemisScene,
	LearnerLayerScene,
	DoerLayerScene,
	FeedbackScene,
	GuardiansScene,
	ToolOperatorsScene,
	TheBridgeScene,
	AtlasThemisScene,
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
							<Audio src={staticFile(`voiceover/lesson-10/${vo.id}.mp3`)} />
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
