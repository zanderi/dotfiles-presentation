import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

type Step = { label: string; color: string };

const STEPS: Step[] = [
	{ label: "1. task-planner — decomposes", color: COLORS.blue },
	{ label: "2. context-reader — reads patterns", color: COLORS.purple },
	{ label: "3. Doers — build", color: COLORS.green },
	{ label: "4. code-reviewer + security-auditor — validate", color: COLORS.red },
	{ label: "5. Doers — iterate", color: COLORS.green },
	{ label: "6. pr-description-writer — summarize", color: COLORS.yellow },
	{ label: "7. implementation-summary — close the loop", color: COLORS.purple },
];

export const PipelineScene: React.FC = () => {
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
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="A Real Pipeline" size="lg" delay={0} />

			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: 14,
					marginTop: 28,
				}}
			>
				{STEPS.map((step, i) => (
					<div key={step.label}>
						<div
							style={{
								opacity: fadeIn(10 + i * 10),
								transform: `translateY(${slideUp(10 + i * 10)}px)`,
								display: "flex",
								alignItems: "center",
								gap: 16,
								background: COLORS.surface,
								border: `1px solid ${step.color}44`,
								borderLeft: `4px solid ${step.color}`,
								borderRadius: 8,
								padding: "12px 18px",
								fontFamily: FONT,
								fontSize: 18,
								color: COLORS.text,
							}}
						>
							{step.label}
						</div>
						{i < STEPS.length - 1 && (
							<div
								style={{
									opacity: fadeIn(15 + i * 10),
									marginLeft: 24,
									fontFamily: FONT,
									fontSize: 16,
									color: COLORS.muted,
								}}
							>
								↓
							</div>
						)}
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
