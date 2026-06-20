import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";
import { PlatformPaths } from "../../../components/PlatformPaths";

const ColumnHeader: React.FC<{ title: string; sub: string }> = ({ title, sub }) => (
	<div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
		<div style={{ fontFamily: FONT, fontSize: 24, fontWeight: 700, color: COLORS.text }}>{title}</div>
		<div style={{ fontFamily: FONT, fontSize: 17, color: COLORS.muted }}>{sub}</div>
	</div>
);

const Caption: React.FC<{ label: string; value: string; color: string }> = ({ label, value, color }) => (
	<div style={{ fontFamily: FONT, fontSize: 16, color: COLORS.muted }}>
		<span style={{ color, fontWeight: 700 }}>{label}</span> {value}
	</div>
);

export const CategoryNamingScene: React.FC = () => {
	const frame = useCurrentFrame();
	const footnoteOpacity = interpolate(frame, [60, 75], [0, 1], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
		easing: EASE_OUT,
	});

	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<Headline text="Category & Naming" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
							<ColumnHeader title="Global" sub="Available in every project" />
							<PlatformPaths
								delay={10}
								paths={[
									{ platform: "Copilot", path: "~/.copilot/agents/", color: COLORS.blue },
									{ platform: "Claude", path: "~/.claude/agents/", color: COLORS.purple },
									{ platform: "Cursor", path: "~/.cursor/rules/", color: COLORS.orange },
								]}
							/>
							<Caption label="Verb-noun:" value="security-auditor, pr-description-writer" color={COLORS.blue} />
						</div>
					}
					right={
						<div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
							<ColumnHeader title="Repo-specific" sub="Scoped to this codebase only" />
							<PlatformPaths
								delay={20}
								paths={[
									{ platform: "Copilot", path: ".copilot/agents/", color: COLORS.blue },
									{ platform: "Claude", path: ".claude/agents/", color: COLORS.purple },
									{ platform: "Cursor", path: ".cursor/rules/", color: COLORS.orange },
								]}
							/>
							<Caption label="Project-prefixed:" value="myapp-api-scaffolder" color={COLORS.purple} />
						</div>
					}
				/>
			</div>

			<div
				style={{
					opacity: footnoteOpacity,
					flexShrink: 0,
					fontFamily: FONT,
					fontSize: 16,
					color: COLORS.muted,
				}}
			>
				<span style={{ color: COLORS.orange, fontWeight: 700 }}>Cursor:</span> agents are
				authored as <span style={{ fontFamily: "monospace" }}>.mdc</span> rules, so they share{" "}
				<span style={{ fontFamily: "monospace" }}>.cursor/rules/</span> with your other rules.
			</div>
		</SceneFrame>
	);
};
