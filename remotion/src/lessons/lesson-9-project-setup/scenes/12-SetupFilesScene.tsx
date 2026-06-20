import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

const GROUPS = [
	{ dir: "Root", files: "README · FLEET.md", count: "2", color: COLORS.blue, delay: 12 },
	{
		dir: "docs/",
		files: "TECH_STACK · ARCHITECTURE · DATA_MODEL · FEATURES · API_DESIGN · DESIGN_SYSTEM · ROADMAP",
		count: "7",
		color: COLORS.purple,
		delay: 22,
	},
	{ dir: "instructions/", files: "SETUP · CONTRIBUTING · DEPLOYMENT", count: "3", color: COLORS.green, delay: 32 },
	{ dir: ".github/", files: "copilot-instructions · lsp.json", count: "2", color: COLORS.orange, delay: 42 },
	{ dir: ".github/…/features/", files: "one spec per feature", count: "8*", color: COLORS.yellow, delay: 52 },
];

export const SetupFilesScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeSlide = (delay: number) => ({
		opacity: interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: EASE_OUT }),
		transform: `translateX(${interpolate(frame, [delay, delay + 15], [-20, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: EASE_OUT })}px)`,
	});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="The Setup Files" size="lg" delay={0} />
			<div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.muted, marginTop: 8 }}>
				What you generate before any app code — grouped by where it lives.
			</div>

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
				{GROUPS.map((g) => (
					<div
						key={g.dir}
						style={{
							...fadeSlide(g.delay),
							display: "flex",
							alignItems: "center",
							gap: 18,
							background: COLORS.surface,
							border: `1px solid ${COLORS.border}`,
							borderLeft: `4px solid ${g.color}`,
							borderRadius: 8,
							padding: "12px 18px",
						}}
					>
						<div style={{ fontFamily: "monospace", fontSize: 19, fontWeight: 700, color: g.color, minWidth: 190, flexShrink: 0 }}>
							{g.dir}
						</div>
						<div style={{ flex: 1, minWidth: 0, fontFamily: FONT, fontSize: 16, color: COLORS.muted }}>{g.files}</div>
						<div
							style={{
								flexShrink: 0,
								minWidth: 44,
								textAlign: "center",
								fontFamily: FONT,
								fontSize: 20,
								fontWeight: 700,
								color: g.color,
								background: `${g.color}22`,
								borderRadius: 6,
								padding: "4px 10px",
							}}
						>
							{g.count}
						</div>
					</div>
				))}

				<div style={{ ...fadeSlide(64), fontFamily: FONT, fontSize: 18, color: COLORS.text, marginTop: 6 }}>
					≈ <span style={{ fontWeight: 700 }}>20+</span> documents —{" "}
					<span style={{ color: COLORS.muted }}>
						<span style={{ color: COLORS.yellow }}>*</span> feature specs scale with your feature count, so the total grows with the app.
					</span>
				</div>
			</div>
		</SceneFrame>
	);
};
