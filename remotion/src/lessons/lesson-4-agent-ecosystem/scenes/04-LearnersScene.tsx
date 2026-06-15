import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const LearnersScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<StepBadge step="CATEGORY" label="Learners" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "context-reader — surfaces existing conventions before code is written", color: COLORS.purple },
						{ text: "architecture-reader — maps layer boundaries for new contributors", color: COLORS.purple },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(35),
						background: `${COLORS.purple}15`,
						border: `1px solid ${COLORS.purple}44`,
						borderRadius: 8,
						padding: "14px 20px",
						fontFamily: FONT,
						fontSize: 20,
						color: COLORS.muted,
						lineHeight: 1.5,
					}}
				>
					These prevent the most common AI mistake: generating code that ignores existing patterns.
				</div>
			</div>
		</SceneFrame>
	);
};
