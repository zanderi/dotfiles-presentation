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
		<SceneFrame accentColor={COLORS.blue}>
			<div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
				<div style={{ opacity: fadeIn(0), transform: `scale(${scale(0)})`, fontFamily: FONT, fontSize: 52, fontWeight: 900, color: COLORS.text, textAlign: "center" as const }}>
					22 files before one line of app code.
				</div>
				<div style={{ opacity: fadeIn(25), fontFamily: FONT, fontSize: 24, color: COLORS.muted, textAlign: "center" as const, maxWidth: 900, lineHeight: 1.6 }}>
					That's the investment that prevents the 50% rework tax.
				</div>
				<div style={{ opacity: fadeIn(40), fontFamily: FONT, fontSize: 20, color: COLORS.blue, textAlign: "center" as const, maxWidth: 900, lineHeight: 1.6 }}>
					The instructions, the design system, the feature specs — these are the infrastructure that makes AI generation reliable.
				</div>
				<div style={{ opacity: fadeIn(55), fontFamily: FONT, fontSize: 18, color: COLORS.muted, textAlign: "center" as const }}>
					Exercise 9 walks you through the full sequence.
				</div>
			</div>
		</SceneFrame>
	);
};
