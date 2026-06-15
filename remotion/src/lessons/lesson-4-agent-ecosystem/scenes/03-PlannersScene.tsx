import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const PlannersScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<StepBadge step="CATEGORY" label="Planners" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "task-planner — decomposes goals into staged agent pipelines", color: COLORS.blue },
						{ text: "architecture-reader — maps codebase before anything is touched", color: COLORS.blue },
						{ text: "context-reader — surfaces patterns before code is written", color: COLORS.blue },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(40),
						background: `${COLORS.blue}15`,
						border: `1px solid ${COLORS.blue}44`,
						borderRadius: 8,
						padding: "14px 20px",
						fontFamily: FONT,
						fontSize: 20,
						fontWeight: 700,
						color: COLORS.blue,
					}}
				>
					🔑 Planners always run before doers.
				</div>
			</div>
		</SceneFrame>
	);
};
