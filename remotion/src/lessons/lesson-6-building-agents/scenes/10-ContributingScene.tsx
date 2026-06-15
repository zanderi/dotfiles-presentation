import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const ContributingScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<Headline text="A Good Agent Is Infrastructure" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "Add it to your dotfiles", color: COLORS.muted },
						{ text: "Document the trigger phrases", color: COLORS.muted },
						{ text: "Document the hard rules", color: COLORS.muted },
						{ text: "Document what it doesn't do", color: COLORS.muted },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(50),
						fontFamily: FONT,
						fontSize: 22,
						color: COLORS.yellow,
					}}
				>
					A well-documented agent in dotfiles is available in every project, forever.
				</div>
			</div>
		</SceneFrame>
	);
};
