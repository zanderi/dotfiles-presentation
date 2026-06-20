import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";
import { SceneFrame } from "../components/SceneFrame";
import { Headline } from "../components/Headline";

const fadeSlide = (
	frame: number,
	delay: number,
): { opacity: number; transform: string } => {
	const opacity = interpolate(frame, [delay, delay + 18], [0, 1], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
		easing: EASE_OUT,
	});
	const translateY = interpolate(frame, [delay, delay + 22], [24, 0], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
		easing: EASE_OUT,
	});
	return { opacity, transform: `translateY(${translateY}px)` };
};

const tools = [
	{
		name: "GitHub Copilot",
		instructions: "copilot-instructions.md",
		context: "AGENTS.md",
		color: COLORS.blue,
	},
	{
		name: "Claude",
		instructions: "CLAUDE.md",
		context: "AGENTS.md",
		color: COLORS.purple,
	},
	{
		name: "Cursor",
		instructions: ".cursorrules",
		context: "AGENTS.md",
		color: COLORS.orange,
	},
	{
		name: "ChatGPT",
		instructions: "Project Instructions",
		context: "Custom Instructions",
		color: COLORS.green,
	},
];

export const PortabilityScene: React.FC = () => {
	const frame = useCurrentFrame();

	const disciplineOpacity = interpolate(frame, [110, 130], [0, 1], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
		easing: EASE_OUT,
	});
	const disciplineY = interpolate(frame, [110, 135], [20, 0], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
		easing: EASE_OUT,
	});

	return (
		<SceneFrame>
			<Headline text="Your Infrastructure. Any Tool." size="lg" delay={0} />

			<div
				style={{
					...fadeSlide(frame, 12),
					fontFamily: FONT,
					fontSize: 19,
					color: COLORS.muted,
					marginBottom: 28,
				}}
			>
				The mental model is identical. The filenames differ.
			</div>

			{/* Tool grid */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 14,
					flex: 1,
				}}
			>
				{/* Header row */}
				<div
					style={{
						...fadeSlide(frame, 18),
						display: "grid",
						gridTemplateColumns: "200px 1fr 1fr",
						gap: 16,
						fontFamily: FONT,
						fontSize: 15,
						fontWeight: 700,
						color: COLORS.muted,
						textTransform: "uppercase",
						letterSpacing: "0.08em",
						paddingBottom: 8,
						borderBottom: `1px solid ${COLORS.border}`,
					}}
				>
					<span>Tool</span>
					<span>Global Instructions</span>
					<span>Repo Context</span>
				</div>

				{/* Tool rows */}
				{tools.map((tool, i) => (
					<div
						key={tool.name}
						style={{
							...fadeSlide(frame, 28 + i * 14),
							display: "grid",
							gridTemplateColumns: "200px 1fr 1fr",
							gap: 16,
							alignItems: "center",
							padding: "14px 16px",
							background: COLORS.surface,
							border: `1px solid ${COLORS.border}`,
							borderLeft: `3px solid ${tool.color}`,
							borderRadius: 8,
							fontFamily: FONT,
						}}
					>
						<span
							style={{
								fontSize: 20,
								fontWeight: 700,
								color: tool.color,
							}}
						>
							{tool.name}
						</span>
						<span
							style={{
								fontSize: 17,
								fontFamily: "monospace",
								color: COLORS.text,
							}}
						>
							{tool.instructions}
						</span>
						<span
							style={{
								fontSize: 17,
								fontFamily: "monospace",
								color: COLORS.muted,
							}}
						>
							{tool.context}
						</span>
					</div>
				))}
			</div>

			{/* Closing statement */}
			<div
				style={{
					opacity: disciplineOpacity,
					transform: `translateY(${disciplineY}px)`,
					marginTop: 28,
					padding: "20px 28px",
					background: `linear-gradient(135deg, ${COLORS.surface} 0%, #1a1f2e 100%)`,
					border: `1px solid ${COLORS.purple}`,
					borderRadius: 10,
					fontFamily: FONT,
					fontSize: 24,
					fontWeight: 700,
					color: COLORS.text,
					textAlign: "center",
				}}
			>
				You're not learning a tool.{" "}
				<span style={{ color: COLORS.purple }}>
					You're learning a discipline.
				</span>
			</div>
		</SceneFrame>
	);
};
