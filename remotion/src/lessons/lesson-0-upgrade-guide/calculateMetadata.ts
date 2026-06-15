import { CalculateMetadataFunction, staticFile } from "remotion";
import { getAudioDuration } from "@remotion/media-utils";
import { VOICEOVER_SCENES, AUDIO_ENABLED, FPS, TRANSITION_FRAMES } from "./voiceover-config";

const POST_AUDIO_PADDING_FRAMES = 45;

export type MainVideoProps = {
	sceneDurations: number[];
};

export const calculateMetadata: CalculateMetadataFunction<MainVideoProps> =
	async () => {
		let sceneDurations: number[];

		if (AUDIO_ENABLED) {
			sceneDurations = await Promise.all(
				VOICEOVER_SCENES.map(async (scene) => {
					const durationSecs = await getAudioDuration(
						staticFile(`voiceover/lesson-0/${scene.id}.mp3`),
					);
					return Math.ceil(durationSecs * FPS) + POST_AUDIO_PADDING_FRAMES;
				}),
			);
		} else {
			sceneDurations = VOICEOVER_SCENES.map(
				(s) => s.estimatedFrames + POST_AUDIO_PADDING_FRAMES,
			);
		}

		const totalFrames =
			sceneDurations.reduce((sum, d) => sum + d, 0) -
			(VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;

		return {
			durationInFrames: Math.ceil(totalFrames),
			props: { sceneDurations },
		};
	};
