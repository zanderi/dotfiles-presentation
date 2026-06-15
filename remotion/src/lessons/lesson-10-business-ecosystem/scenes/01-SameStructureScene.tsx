import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";

const DEV_LAYERS = ["Orchestrator", "Planners", "Learners", "Doers", "Feedback", "Guardians", "Tool Operators", "Presenters"];

export const SameStructureScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeRow = (i: number) =>
		interpolate(frame, [10 + i * 5, 25 + i * 5], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Same Structure, Different Domain" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 24 }}>
				<TwoColumn
					left={
						<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
							<div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, color: COLORS.blue, marginBottom: 8 }}>Dev Pipeline — Atlas</div>
							{DEV_LAYERS.map((layer, i) => (
								<div key={layer} style={{ opacity: fadeRow(i), fontFamily: FONT, fontSize: 16, color: COLORS.muted, padding: "4px 12px", borderLeft: `3px solid ${COLORS.blue}` }}>{layer}</div>
							))}
						</div>
					}
					right={
						<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
							<div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, color: COLORS.green, marginBottom: 8 }}>Business Pipeline — Themis</div>
							{DEV_LAYERS.map((layer, i) => (
								<div key={layer} style={{ opacity: fadeRow(i), fontFamily: FONT, fontSize: 16, color: COLORS.muted, padding: "4px 12px", borderLeft: `3px solid ${COLORS.green}` }}>{layer}</div>
							))}
						</div>
					}
				/>
			</div>
		</SceneFrame>
	);
};
