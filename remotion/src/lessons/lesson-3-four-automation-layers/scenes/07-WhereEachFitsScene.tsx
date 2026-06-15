import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

type LayerRow = {
	num: string;
	name: string;
	trigger: string;
	example: string;
	color: string;
};

const LAYERS: LayerRow[] = [
	{ num: "1", name: "Instructions", trigger: "Always active", example: ".github/instructions/", color: COLORS.blue },
	{ num: "2", name: "Skills", trigger: "Description match", example: "validate-commit-message", color: COLORS.green },
	{ num: "3", name: "Agents", trigger: "You describe intent", example: "code-reviewer", color: COLORS.blue },
	{ num: "4", name: "Hooks + CI", trigger: "Git events", example: "pre-commit, push", color: COLORS.orange },
];

export const WhereEachFitsScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [20, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.orange}>
			<Headline text="Where Each Fits" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 32 }}>
				{/* Header row */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "60px 220px 1fr 1fr",
						gap: 16,
						padding: "0 8px",
					}}
				>
					{["Layer", "Name", "Trigger", "Example"].map((h) => (
						<div key={h} style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase" as const, letterSpacing: 1 }}>
							{h}
						</div>
					))}
				</div>

				{LAYERS.map((layer, i) => (
					<div
						key={layer.num}
						style={{
							opacity: fadeIn(10 + i * 12),
							transform: `translateY(${slideUp(10 + i * 12)}px)`,
							display: "grid",
							gridTemplateColumns: "60px 220px 1fr 1fr",
							gap: 16,
							background: COLORS.surface,
							border: `1px solid ${layer.color}44`,
							borderLeft: `4px solid ${layer.color}`,
							borderRadius: 8,
							padding: "16px 8px 16px 16px",
							alignItems: "center",
						}}
					>
						<div style={{ fontFamily: FONT, fontSize: 22, fontWeight: 700, color: layer.color }}>
							{layer.num}
						</div>
						<div style={{ fontFamily: FONT, fontSize: 18, fontWeight: 600, color: COLORS.text }}>
							{layer.name}
						</div>
						<div style={{ fontFamily: FONT, fontSize: 17, color: COLORS.muted }}>
							{layer.trigger}
						</div>
						<div style={{ fontFamily: "monospace", fontSize: 16, color: COLORS.muted }}>
							{layer.example}
						</div>
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
