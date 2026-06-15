import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

const STEPS = [
	{ label: "1", desc: "Shift+Tab → enter plan mode" },
	{ label: "2", desc: "Describe the feature" },
	{ label: "3", desc: "Copilot generates a staged plan (files + changes)" },
	{ label: "4", desc: "Review every file and change" },
	{ label: "5", desc: "Approve" },
	{ label: "6", desc: "Autopilot executes" },
];

export const PlanModeScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 18], [15, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.orange}>
			<Headline text="Plan Before You Build" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
				{STEPS.map((step, i) => (
					<div
						key={step.label}
						style={{
							opacity: fadeIn(10 + i * 10),
							transform: `translateY(${slideUp(10 + i * 10)}px)`,
							display: "flex",
							alignItems: "center",
							gap: 16,
							background: COLORS.surface,
							border: `1px solid ${COLORS.border}`,
							borderRadius: 8,
							padding: "12px 18px",
						}}
					>
						<div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 700, color: COLORS.orange, width: 28 }}>
							{step.label}.
						</div>
						<div style={{ fontFamily: FONT, fontSize: 18, color: COLORS.text }}>
							{step.desc}
						</div>
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
