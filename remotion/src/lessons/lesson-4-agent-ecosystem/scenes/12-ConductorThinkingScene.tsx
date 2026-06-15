import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";

export const ConductorThinkingScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 25], [25, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center" as const,
					gap: 32,
					padding: "0 80px",
				}}
			>
				<div
					style={{
						opacity: fadeIn(0),
						transform: `translateY(${slideUp(0)}px)`,
						fontFamily: FONT,
						fontSize: 72,
						fontWeight: 700,
						color: COLORS.text,
					}}
				>
					You are the conductor.
				</div>

				<div
					style={{
						opacity: fadeIn(20),
						transform: `translateY(${slideUp(20)}px)`,
						fontFamily: FONT,
						fontSize: 28,
						color: COLORS.muted,
						lineHeight: 1.5,
					}}
				>
					Not the expert in every layer. Not the one writing every line.
				</div>

				<div
					style={{
						opacity: fadeIn(40),
						transform: `translateY(${slideUp(40)}px)`,
						fontFamily: FONT,
						fontSize: 26,
						color: COLORS.text,
						lineHeight: 1.5,
					}}
				>
					You know what each specialist does, when to call them, and in what order.
				</div>

				<div
					style={{
						opacity: fadeIn(60),
						transform: `translateY(${slideUp(60)}px)`,
						fontFamily: FONT,
						fontSize: 30,
						fontWeight: 700,
						color: COLORS.blue,
					}}
				>
					That's the new job.
				</div>
			</div>
		</SceneFrame>
	);
};
