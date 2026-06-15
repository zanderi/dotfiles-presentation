import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

const WAVES = [
	{ label: "Wave 1", items: ["README", "Architecture", "Tech Stack Docs"], color: COLORS.blue, delay: 10 },
	{ label: "Wave 2", items: ["Design System", "Component Decisions", "Data Model"], color: COLORS.purple, delay: 30 },
	{ label: "Wave 3", items: ["Feature Specs", "Instruction Files", "Agent Setup"], color: COLORS.green, delay: 50 },
];

export const FleetBuildPlanScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="22 Files in Waves" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 32 }}>
				{WAVES.map((wave) => (
					<div
						key={wave.label}
						style={{
							opacity: fadeIn(wave.delay),
							background: `${wave.color}15`,
							border: `2px solid ${wave.color}`,
							borderRadius: 12,
							padding: "16px 24px",
							display: "flex",
							alignItems: "center",
							gap: 20,
						}}
					>
						<div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, color: wave.color, minWidth: 80 }}>{wave.label}</div>
						<div style={{ fontFamily: FONT, fontSize: 17, color: COLORS.muted }}>
							{wave.items.join("  ·  ")}
						</div>
					</div>
				))}
				<div style={{ opacity: fadeIn(65), fontFamily: FONT, fontSize: 16, color: COLORS.muted, marginTop: 8 }}>
					Sequential dependency = sequential waves. Independent work = parallelized.
				</div>
			</div>
		</SceneFrame>
	);
};
