import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { InfoCard } from "../../../components/InfoCard";

export const OrchestratorScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 25], [20, 0], {
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
					gap: 32,
				}}
			>
				<InfoCard
					icon="🎯"
					title="Atlas — The Orchestrator"
					body="Doesn't do the work. Reads intent. Routes to the right specialist. Coordinates the session."
					color={COLORS.blue}
					delay={0}
				/>

				<div
					style={{
						opacity: fadeIn(30),
						transform: `translateY(${slideUp(30)}px)`,
						fontFamily: FONT,
						fontSize: 24,
						color: COLORS.muted,
						textAlign: "center" as const,
					}}
				>
					Your job shifts from doing every task to directing traffic.
				</div>
			</div>
		</SceneFrame>
	);
};
