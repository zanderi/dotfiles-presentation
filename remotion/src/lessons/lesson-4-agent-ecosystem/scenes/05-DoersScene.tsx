import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const DoersScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<StepBadge step="CATEGORY" label="Doers" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "refactoring-assistant — applies code transformations", color: COLORS.green },
						{ text: "project-scaffolder — generates project structure", color: COLORS.green },
						{ text: "dependency-upgrader — bumps packages and fixes call sites", color: COLORS.green },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(40),
						background: `${COLORS.orange}15`,
						border: `1px solid ${COLORS.orange}44`,
						borderRadius: 8,
						padding: "14px 20px",
						fontFamily: FONT,
						fontSize: 20,
						fontWeight: 700,
						color: COLORS.orange,
					}}
				>
					⚠️ Doers should always run after validators. A doer with no reviewer is a risk.
				</div>
			</div>
		</SceneFrame>
	);
};
