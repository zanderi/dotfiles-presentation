import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";

export const StartHereScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const scale = interpolate(frame, [0, 25], [0.95, 1], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
		easing: EASE_OUT,
	});

	return (
		<SceneFrame accentColor={COLORS.purple}>
			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: 40,
				}}
			>
				<div
					style={{
						opacity: fadeIn(0),
						transform: `scale(${scale})`,
						background: COLORS.surface,
						border: `2px solid ${COLORS.purple}`,
						borderRadius: 16,
						padding: "48px 64px",
						maxWidth: 900,
						textAlign: "center" as const,
						display: "flex",
						flexDirection: "column",
						gap: 28,
					}}
				>
					<div
						style={{
							fontFamily: FONT,
							fontSize: 64,
							fontWeight: 700,
							color: COLORS.purple,
						}}
					>
						Start at Lesson 3.
					</div>

					<div
						style={{
							opacity: fadeIn(20),
							fontFamily: FONT,
							fontSize: 28,
							color: COLORS.text,
							lineHeight: 1.4,
						}}
					>
						Four automation layers — the concept that explains why your agents
						don't auto-fire.
					</div>

					<div
						style={{
							opacity: fadeIn(35),
							fontFamily: FONT,
							fontSize: 22,
							color: COLORS.muted,
						}}
					>
						Everything else builds on this foundation.
					</div>
				</div>
			</div>
		</SceneFrame>
	);
};
