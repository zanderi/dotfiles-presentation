import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";

export const TitleScene: React.FC = () => {
	const frame = useCurrentFrame();
	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: EASE_OUT });
	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: EASE_OUT });

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", gap: 24 }}>
				<div style={{ opacity: fadeIn(0), transform: `translateY(${slideUp(0)}px)`, fontSize: 22, fontFamily: FONT, color: COLORS.muted, letterSpacing: 4, textTransform: "uppercase" }}>
					Lesson 4
				</div>
				<div style={{ opacity: fadeIn(10), transform: `translateY(${slideUp(10)}px)`, fontSize: 88, fontWeight: 700, fontFamily: FONT, color: COLORS.blue }}>
					The Agent Ecosystem
				</div>
				<div style={{ opacity: fadeIn(25), transform: `translateY(${slideUp(25)}px)`, fontSize: 36, fontWeight: 700, fontFamily: FONT, color: COLORS.text }}>
					Specialists That Do One Thing Well
				</div>
				<div style={{ opacity: fadeIn(40), transform: `translateY(${slideUp(40)}px)`, fontSize: 24, fontFamily: FONT, color: COLORS.muted }}>
					Orchestrators, planners, doers, guardians — the full map
				</div>
			</div>
			<div style={{ opacity: fadeIn(50), fontFamily: FONT, fontSize: 16, color: COLORS.muted, alignSelf: "flex-end" }}>
				GitHub Copilot CLI
			</div>
		</SceneFrame>
	);
};
