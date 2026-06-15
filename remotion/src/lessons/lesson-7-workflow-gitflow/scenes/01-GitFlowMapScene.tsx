import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

type FlowRow = { event: string; hook: string; tool: string; layer: string; color: string };

const ROWS: FlowRow[] = [
	{ event: "git commit", hook: "pre-commit", tool: "prettier + eslint", layer: "Layer 4", color: COLORS.orange },
	{ event: "commit message", hook: "commit-msg", tool: "conventional format", layer: "Layer 4", color: COLORS.orange },
	{ event: "git push", hook: "CI/CD", tool: "lint + tests", layer: "Layer 4", color: COLORS.orange },
	{ event: "PR open", hook: "feature-pr-gate", tool: "all quality gates", layer: "Layer 3", color: COLORS.blue },
	{ event: "merge to main", hook: "release tooling", tool: "changelog + notes", layer: "Layer 3", color: COLORS.blue },
];

export const GitFlowMapScene: React.FC = () => {
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
			<Headline text="Every Event Has an Owner" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
				{/* Header */}
				<div style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr 100px", gap: 16, padding: "0 8px" }}>
					{["Event", "Hook", "Tool", "Layer"].map((h) => (
						<div key={h} style={{ fontFamily: FONT, fontSize: 13, fontWeight: 700, color: COLORS.muted, textTransform: "uppercase" as const, letterSpacing: 1 }}>{h}</div>
					))}
				</div>

				{ROWS.map((row, i) => (
					<div
						key={row.event}
						style={{
							opacity: fadeIn(10 + i * 10),
							transform: `translateY(${slideUp(10 + i * 10)}px)`,
							display: "grid",
							gridTemplateColumns: "180px 1fr 1fr 100px",
							gap: 16,
							background: COLORS.surface,
							border: `1px solid ${row.color}33`,
							borderLeft: `4px solid ${row.color}`,
							borderRadius: 8,
							padding: "12px 8px 12px 16px",
							alignItems: "center",
						}}
					>
						<div style={{ fontFamily: "monospace", fontSize: 16, color: COLORS.text }}>{row.event}</div>
						<div style={{ fontFamily: FONT, fontSize: 15, color: COLORS.muted }}>{row.hook}</div>
						<div style={{ fontFamily: FONT, fontSize: 15, color: COLORS.muted }}>{row.tool}</div>
						<div style={{ fontFamily: FONT, fontSize: 14, fontWeight: 700, color: row.color }}>{row.layer}</div>
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
