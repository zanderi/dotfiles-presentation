import React from "react";
import { Audio, staticFile } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";

import { GitFlowMapScene } from "./scenes/01-GitFlowMapScene";
import { PreCommitScene } from "./scenes/02-PreCommitScene";
import { CommitMsgScene } from "./scenes/03-CommitMsgScene";
import { LintStagedScene } from "./scenes/04-LintStagedScene";
import { CIEnforcementScene } from "./scenes/05-CIEnforcementScene";
import { WorkflowAgentScene } from "./scenes/06-WorkflowAgentScene";
import { PlanModeScene } from "./scenes/07-PlanModeScene";
import { FleetScene } from "./scenes/08-FleetScene";
import { ClosingScene } from "./scenes/09-ClosingScene";
import { VOICEOVER_SCENES, AUDIO_ENABLED } from "./voiceover-config";
import type { MainVideoProps } from "./calculateMetadata";

const TRANSITION = linearTiming({ durationInFrames: 20 });
const PRES = fade();

const SCENES = [
	GitFlowMapScene,
	PreCommitScene,
	CommitMsgScene,
	LintStagedScene,
	CIEnforcementScene,
	WorkflowAgentScene,
	PlanModeScene,
	FleetScene,
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
							<Audio src={staticFile(`voiceover/lesson-7/${vo.id}.mp3`)} />
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
