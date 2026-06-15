import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";

export const TheQuestionScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 25], [30, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.orange}>
			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center" as const,
					gap: 40,
				}}
			>
				<div
					style={{
						opacity: fadeIn(0),
						transform: `translateY(${slideUp(0)}px)`,
						fontFamily: FONT,
						fontSize: 64,
						fontWeight: 700,
						color: COLORS.text,
						maxWidth: 1100,
						lineHeight: 1.2,
					}}
				>
					"How do I make agents run at git events?"
				</div>

				<div
					style={{
						opacity: fadeIn(45),
						transform: `translateY(${slideUp(45)}px)`,
						fontFamily: FONT,
						fontSize: 30,
						color: COLORS.orange,
						fontStyle: "italic",
					}}
				>
					The answer changes everything about how you think about this.
				</div>
			</div>
		</SceneFrame>
	);
};
