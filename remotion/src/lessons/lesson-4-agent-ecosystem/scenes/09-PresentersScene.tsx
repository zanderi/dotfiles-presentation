import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const PresentersScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<StepBadge step="CATEGORY" label="Presenters" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "technical-writer — user docs, stakeholder summaries", color: COLORS.purple },
						{ text: "implementation-summary — the AI work receipt", color: COLORS.purple },
						{ text: "release-notes-writer — commits → readable summaries", color: COLORS.purple },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(40),
						background: `${COLORS.purple}15`,
						border: `1px solid ${COLORS.purple}44`,
						borderRadius: 8,
						padding: "14px 20px",
						fontFamily: FONT,
						fontSize: 19,
						color: COLORS.muted,
						lineHeight: 1.5,
					}}
				>
					The output of a presenter is the last step in a pipeline — the artifact that closes the loop.
				</div>
			</div>
		</SceneFrame>
	);
};
