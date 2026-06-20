import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { TitleScene } from "./scenes/00-TitleScene";
import { BeforeAnyCodeScene } from "./scenes/01-BeforeAnyCodeScene";
import { NamingFramingScene } from "./scenes/02-NamingFramingScene";
import { GeneratingDocsScene } from "./scenes/03-GeneratingDocsScene";
import { ProjectInstructionsScene } from "./scenes/04-ProjectInstructionsScene";
import { DesignSystemFirstScene } from "./scenes/05-DesignSystemFirstScene";
import { FeatureSpecsScene } from "./scenes/06-FeatureSpecsScene";
import { SetupFilesScene } from "./scenes/12-SetupFilesScene";
import { FleetBuildPlanScene } from "./scenes/07-FleetBuildPlanScene";
import { PlanModePrereqsScene } from "./scenes/08-PlanModePrereqsScene";
import { RunningFleetScene } from "./scenes/09-RunningFleetScene";
import { ResilienceScene } from "./scenes/11-ResilienceScene";
import { ClosingScene } from "./scenes/10-ClosingScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	TitleScene,
	BeforeAnyCodeScene,
	NamingFramingScene,
	GeneratingDocsScene,
	ProjectInstructionsScene,
	DesignSystemFirstScene,
	FeatureSpecsScene,
	SetupFilesScene,
	FleetBuildPlanScene,
	PlanModePrereqsScene,
	RunningFleetScene,
	ResilienceScene,
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
						{AUDIO_ENABLED && !("noAudio" in vo && vo.noAudio) && (
							<Audio src={staticFile(`voiceover/lesson-9/${vo.id}.mp3`)} />
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
