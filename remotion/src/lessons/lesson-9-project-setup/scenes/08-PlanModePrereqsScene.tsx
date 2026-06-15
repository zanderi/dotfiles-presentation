import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

const DEPS = [
	{ label: "copilot-instructions.md", note: "must exist before any agents run", delay: 10 },
	{ label: "Design system doc", note: "must exist before any UI work", delay: 25 },
	{ label: "Data model", note: "must exist before any API work", delay: 40 },
];

export const PlanModePrereqsScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Map the Prerequisites First" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}>
				{DEPS.map((dep, i) => (
					<div key={dep.label} style={{ opacity: fadeIn(dep.delay), display: "flex", flexDirection: "column", gap: 6 }}>
						<div style={{ display: "flex", alignItems: "center", gap: 16 }}>
							<div style={{ width: 32, height: 32, borderRadius: "50%", background: COLORS.blue, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: FONT, fontSize: 15, color: COLORS.text, fontWeight: 700 }}>{i + 1}</div>
							<div style={{ fontFamily: FONT, fontSize: 19, color: COLORS.text, fontWeight: 600 }}>{dep.label}</div>
						</div>
						<div style={{ marginLeft: 48, fontFamily: FONT, fontSize: 16, color: COLORS.muted }}>{dep.note}</div>
					</div>
				))}
				<div style={{ opacity: fadeIn(55), fontFamily: FONT, fontSize: 17, color: COLORS.muted, marginTop: 16 }}>
					Plan mode surfaces these. Fleet executes after approval.
				</div>
			</div>
		</SceneFrame>
	);
};
