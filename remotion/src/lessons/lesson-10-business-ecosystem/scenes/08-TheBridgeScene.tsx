import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

export const TheBridgeScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Two Pipelines. One Bridge." size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "row", gap: 40, marginTop: 40, alignItems: "flex-start" }}>
				<div style={{ opacity: fadeIn(10), flex: 1, display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
					<div style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, color: COLORS.blue }}>Dev Pipeline</div>
					<div style={{ fontFamily: FONT, fontSize: 18, color: COLORS.muted }}>Atlas</div>
					<div style={{ fontSize: 28, marginTop: 8 }}>⬇️</div>
				</div>

				<div style={{ opacity: fadeIn(25), flex: 1, display: "flex", flexDirection: "column", gap: 12, alignItems: "center' " }}>
					<div style={{ fontFamily: FONT, fontSize: 18, color: COLORS.muted }}>connects</div>
					<div style={{ background: `${COLORS.green}20`, border: `2px solid ${COLORS.green}`, borderRadius: 12, padding: "16px 20px", textAlign: "center" as const }}>
						<div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 700, color: COLORS.green }}>solution-bridge-writer</div>
					</div>
					<div style={{ fontFamily: FONT, fontSize: 14, color: COLORS.muted, textAlign: "center" as const }}>Business requirements → dev-ready spec</div>
				</div>

				<div style={{ opacity: fadeIn(10), flex: 1, display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
					<div style={{ fontFamily: FONT, fontSize: 20, fontWeight: 700, color: COLORS.green }}>Business Pipeline</div>
					<div style={{ fontFamily: FONT, fontSize: 18, color: COLORS.muted }}>Themis</div>
					<div style={{ fontSize: 28, marginTop: 8 }}>⬇️</div>
				</div>
			</div>
		</SceneFrame>
	);
};
