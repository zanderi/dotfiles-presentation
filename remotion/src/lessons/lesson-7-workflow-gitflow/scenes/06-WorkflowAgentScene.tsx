import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

const PHASES = [
	{ label: "Phase 1", desc: "code-reviewer", color: COLORS.blue },
	{ label: "Phase 2", desc: "security-auditor + env-config-reviewer", color: COLORS.red },
	{ label: "Phase 3", desc: "dependency-auditor (if package files changed)", color: COLORS.yellow },
	{ label: "Phase 4", desc: "pr-description-writer + implementation-summary", color: COLORS.purple },
];

export const WorkflowAgentScene: React.FC = () => {
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
			<Headline text="`feature-pr-gate`" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, marginTop: 28 }}>
				{PHASES.map((phase, i) => (
					<div
						key={phase.label}
						style={{
							opacity: fadeIn(10 + i * 12),
							transform: `translateY(${slideUp(10 + i * 12)}px)`,
							display: "flex",
							alignItems: "center",
							gap: 20,
							background: COLORS.surface,
							border: `1px solid ${phase.color}44`,
							borderLeft: `4px solid ${phase.color}`,
							borderRadius: 8,
							padding: "16px 20px",
						}}
					>
						<div style={{ fontFamily: FONT, fontSize: 16, fontWeight: 700, color: phase.color, width: 80, flexShrink: 0 }}>
							{phase.label}
						</div>
						<div style={{ fontFamily: FONT, fontSize: 19, color: COLORS.text }}>
							{phase.desc}
						</div>
					</div>
				))}

				<div
					style={{
						opacity: fadeIn(60),
						fontFamily: FONT,
						fontSize: 20,
						color: COLORS.muted,
						textAlign: "center" as const,
						marginTop: 8,
					}}
				>
					One invocation. Every quality gate covered.
				</div>
			</div>
		</SceneFrame>
	);
};
