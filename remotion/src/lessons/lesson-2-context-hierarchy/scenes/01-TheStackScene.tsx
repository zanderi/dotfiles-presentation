import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

const PLATFORMS = [
	{ name: "Copilot", color: COLORS.blue },
	{ name: "Claude", color: COLORS.purple },
	{ name: "Cursor", color: COLORS.orange },
];

type Layer = {
	label: string;
	color: string;
	delay: number;
} & (
	| { paths: [string, string, string]; universal?: undefined }
	| { universal: string; paths?: undefined }
);

const LAYERS: Layer[] = [
	{
		label: "Global Config",
		color: COLORS.blue,
		delay: 14,
		paths: ["~/.copilot/copilot-instructions.md", "~/.claude/CLAUDE.md", "~/.cursorrules"],
	},
	{
		label: "AGENTS.md",
		color: COLORS.purple,
		delay: 22,
		universal: "AGENTS.md at repo root — model-agnostic, every tool reads it",
	},
	{
		label: "Repo Instructions",
		color: COLORS.green,
		delay: 30,
		paths: [".github/copilot-instructions.md", "CLAUDE.md", ".cursorrules"],
	},
	{
		label: "Task Instructions",
		color: COLORS.orange,
		delay: 38,
		paths: [".github/instructions/*.md", "nested CLAUDE.md", ".cursor/rules/*.mdc"],
	},
	{
		label: "Skills",
		color: COLORS.yellow,
		delay: 46,
		paths: ["prompt-matched skill", "SKILL.md", "— use rules / MCP"],
	},
	{
		label: "Tool Configs",
		color: COLORS.muted,
		delay: 54,
		universal: ".editorconfig · .prettierrc · tsconfig.json — shared by all",
	},
];

const LABEL_W = 240;
const COL_GAP = 14;

export const TheStackScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeSlide = (delay: number) => ({
		opacity: interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: EASE_OUT }),
		transform: `translateX(${interpolate(frame, [delay, delay + 15], [-20, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: EASE_OUT })}px)`,
	});

	const cellBase: React.CSSProperties = {
		flex: 1,
		minWidth: 0,
		background: COLORS.surface,
		border: `1px solid ${COLORS.border}`,
		borderRadius: 6,
		padding: "10px 14px",
		display: "flex",
		alignItems: "center",
	};

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="The Context Stack" size="lg" delay={0} />
			<div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.muted, marginTop: 8 }}>
				Same stack on every tool — only the filenames change.
			</div>

			{/* Platform column headers */}
			<div style={{ display: "flex", gap: COL_GAP, marginTop: 22, marginBottom: 6 }}>
				<div style={{ width: LABEL_W, flexShrink: 0 }} />
				{PLATFORMS.map((p) => (
					<div
						key={p.name}
						style={{
							...fadeSlide(6),
							flex: 1,
							fontFamily: FONT,
							fontSize: 19,
							fontWeight: 700,
							color: p.color,
							padding: "0 14px",
						}}
					>
						{p.name}
					</div>
				))}
			</div>

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
				{LAYERS.map((layer) => (
					<div key={layer.label} style={{ ...fadeSlide(layer.delay), display: "flex", gap: COL_GAP }}>
						{/* Layer label */}
						<div
							style={{
								width: LABEL_W,
								flexShrink: 0,
								background: COLORS.surface,
								borderLeft: `4px solid ${layer.color}`,
								borderRadius: 6,
								padding: "10px 16px",
								display: "flex",
								alignItems: "center",
								fontFamily: FONT,
								fontSize: 18,
								fontWeight: 700,
								color: layer.color,
							}}
						>
							{layer.label}
						</div>

						{/* Per-platform paths, or a single spanning note for universal layers */}
						{layer.paths ? (
							layer.paths.map((path, i) => (
								<div key={i} style={cellBase}>
									<span
										style={{
											fontFamily: "monospace",
											fontSize: 15,
											color: path === "—" ? COLORS.border : COLORS.muted,
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										{path}
									</span>
								</div>
							))
						) : (
							<div
								style={{
									flex: 3,
									minWidth: 0,
									background: COLORS.surface,
									border: `1px dashed ${COLORS.border}`,
									borderRadius: 6,
									padding: "10px 14px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 8,
								}}
							>
								<span style={{ color: COLORS.green, fontWeight: 700, fontSize: 14 }}>✓ Universal</span>
								<span style={{ fontFamily: FONT, fontSize: 15, color: COLORS.muted }}>{layer.universal}</span>
							</div>
						)}
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
