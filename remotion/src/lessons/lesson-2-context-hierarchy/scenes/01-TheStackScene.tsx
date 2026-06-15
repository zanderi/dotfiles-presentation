import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

const LAYERS = [
	{ label: "Global Config", sub: "~/.copilot/copilot-instructions.md", color: COLORS.blue, delay: 10 },
	{ label: "AGENTS.md", sub: "Repo root — model-agnostic rules", color: COLORS.purple, delay: 20 },
	{ label: "Repo Instructions", sub: ".github/copilot-instructions.md", color: COLORS.green, delay: 30 },
	{ label: "Task Instructions", sub: ".github/instructions/*.instructions.md", color: COLORS.orange, delay: 40 },
	{ label: "Skills", sub: "Fire when prompt matches description", color: COLORS.yellow, delay: 50 },
	{ label: "Tool Configs", sub: ".editorconfig · .prettierrc · tsconfig.json", color: COLORS.muted, delay: 60 },
];

export const TheStackScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeSlide = (delay: number) => ({
		opacity: interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: EASE_OUT }),
		transform: `translateX(${interpolate(frame, [delay, delay + 15], [-20, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: EASE_OUT })}px)`,
	});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="The Context Stack" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
				{LAYERS.map((layer) => (
					<div key={layer.label} style={{ ...fadeSlide(layer.delay), display: "flex", alignItems: "center", gap: 16, background: COLORS.surface, border: `1px solid ${layer.color}44`, borderLeft: `4px solid ${layer.color}`, borderRadius: 8, padding: "12px 20px" }}>
						<div style={{ flex: 1 }}>
							<div style={{ fontFamily: FONT, fontSize: 19, fontWeight: 700, color: layer.color }}>{layer.label}</div>
							<div style={{ fontFamily: FONT, fontSize: 15, color: COLORS.muted, marginTop: 2 }}>{layer.sub}</div>
						</div>
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
