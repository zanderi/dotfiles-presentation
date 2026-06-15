import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

const STEPS = [
	{ label: "1. Product owner describes feature", side: "Themis", color: COLORS.green },
	{ label: "2. po-docs-auditor identifies gaps", side: "Themis", color: COLORS.green },
	{ label: "3. technical-writer fills them", side: "Themis", color: COLORS.green },
	{ label: "4. solution-bridge-writer translates to dev-ready spec", side: "Bridge", color: COLORS.purple },
	{ label: "5. Atlas receives spec", side: "Atlas", color: COLORS.blue },
	{ label: "6. task-planner decomposes", side: "Atlas", color: COLORS.blue },
	{ label: "7. Fleet executes", side: "Atlas", color: COLORS.blue },
	{ label: "8. code-reviewer + security-auditor validate", side: "Atlas", color: COLORS.blue },
	{ label: "9. pr-description-writer closes the loop", side: "Bridge", color: COLORS.purple },
];

export const AtlasThemisScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 12], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="The Full End-to-End" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, marginTop: 20, overflowY: "hidden" as const }}>
				{STEPS.map((step, i) => (
					<div key={step.label} style={{ opacity: fadeIn(8 + i * 7), display: "flex", alignItems: "center", gap: 12 }}>
						<div style={{ width: 8, height: 8, borderRadius: "50%", background: step.color, flexShrink: 0 }} />
						<div style={{ fontFamily: FONT, fontSize: 15, color: COLORS.text }}>{step.label}</div>
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
