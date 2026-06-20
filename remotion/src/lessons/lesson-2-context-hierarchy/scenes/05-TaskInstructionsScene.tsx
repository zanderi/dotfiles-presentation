import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

const EXAMPLES = [
	{
		name: "Copilot",
		color: COLORS.blue,
		root: ".github/instructions/",
		files: ["api.instructions.md", "tests.instructions.md"],
	},
	{
		name: "Claude",
		color: COLORS.purple,
		root: "nested in the tree",
		files: ["src/api/CLAUDE.md", "tests/CLAUDE.md"],
	},
	{
		name: "Cursor",
		color: COLORS.orange,
		root: ".cursor/rules/",
		files: ["api.mdc", "tests.mdc"],
	},
];

export const TaskInstructionsScene: React.FC = () => {
	const frame = useCurrentFrame();

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Task Instructions" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<div style={{ display: "flex", gap: 16 }}>
					{EXAMPLES.map((ex, i) => {
						const d = 10 + i * 10;
						const opacity = interpolate(frame, [d, d + 15], [0, 1], {
							extrapolateRight: "clamp",
							extrapolateLeft: "clamp",
							easing: EASE_OUT,
						});
						const translateY = interpolate(frame, [d, d + 18], [20, 0], {
							extrapolateRight: "clamp",
							extrapolateLeft: "clamp",
							easing: EASE_OUT,
						});
						return (
							<div
								key={ex.name}
								style={{
									opacity,
									transform: `translateY(${translateY}px)`,
									flex: 1,
									minWidth: 0,
									background: COLORS.surface,
									border: `1px solid ${COLORS.border}`,
									borderLeft: `4px solid ${ex.color}`,
									borderRadius: 8,
									padding: "16px 20px",
									display: "flex",
									flexDirection: "column",
									gap: 10,
								}}
							>
								<div style={{ fontFamily: FONT, fontSize: 19, fontWeight: 700, color: ex.color }}>
									{ex.name}
								</div>
								<div style={{ fontFamily: "monospace", fontSize: 15, color: COLORS.muted }}>
									{ex.root}
								</div>
								{ex.files.map((f) => (
									<div key={f} style={{ fontFamily: "monospace", fontSize: 16, color: COLORS.text }}>
										{f}
									</div>
								))}
							</div>
						);
					})}
				</div>

				<BulletList
					delay={45}
					items={[
						{ text: "Load automatically when the path matches", color: COLORS.blue },
						{ text: "Right rules for the right files at the right time", color: COLORS.muted },
						{ text: "Granular is better than one giant file", color: COLORS.green },
						{ text: "No path match = not loaded = no noise in unrelated contexts", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
