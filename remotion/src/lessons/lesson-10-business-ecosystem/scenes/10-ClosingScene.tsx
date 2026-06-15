import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";

export const ClosingScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const scale = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0.95, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.green}>
			<div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
				<div style={{ opacity: fadeIn(0), transform: `scale(${scale(0)})`, fontFamily: FONT, fontSize: 52, fontWeight: 900, color: COLORS.text, textAlign: "center" as const }}>
					Ten lessons. Two ecosystems. One pipeline.
				</div>
				<div style={{ opacity: fadeIn(20), fontFamily: FONT, fontSize: 22, color: COLORS.muted, textAlign: "center" as const, maxWidth: 900, lineHeight: 1.6 }}>
					You started with installing the CLI. You end with a complete system that connects business intent to shipped code with every quality gate in between.
				</div>
				<div style={{ opacity: fadeIn(40), fontFamily: FONT, fontSize: 22, color: COLORS.green, textAlign: "center" as const, maxWidth: 800, lineHeight: 1.6, fontWeight: 700 }}>
					The tools don't replace your judgment — they amplify it.
				</div>
			</div>
		</SceneFrame>
	);
};
