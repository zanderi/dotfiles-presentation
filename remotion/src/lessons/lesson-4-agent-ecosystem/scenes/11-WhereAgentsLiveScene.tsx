import React from "react";
import { COLORS, FONT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { useCurrentFrame, interpolate } from "remotion";
import { EASE_OUT } from "../../../constants";
import { TwoColumn } from "../../../components/TwoColumn";
import { PlatformPaths } from "../../../components/PlatformPaths";

const ColumnHeader: React.FC<{ title: string; sub: string }> = ({ title, sub }) => (
	<div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
		<div style={{ fontFamily: FONT, fontSize: 24, fontWeight: 700, color: COLORS.text }}>{title}</div>
		<div style={{ fontFamily: FONT, fontSize: 17, color: COLORS.muted }}>{sub}</div>
	</div>
);

const Caption: React.FC<{ text: string }> = ({ text }) => (
	<div style={{ fontFamily: FONT, fontSize: 16, color: COLORS.muted }}>{text}</div>
);

export const WhereAgentsLiveScene: React.FC = () => {
	const frame = useCurrentFrame();
	const footnoteOpacity = interpolate(frame, [60, 75], [0, 1], {
		extrapolateRight: "clamp",
		extrapolateLeft: "clamp",
		easing: EASE_OUT,
	});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Where Agents Live" size="lg" delay={0} />

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
							<Caption text="Verb-noun names: security-auditor" />
						</div>
					}
					right={
						<div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
							<ColumnHeader title="Repo-specific" sub="Scoped to this codebase" />
							<PlatformPaths
								delay={20}
								paths={[
									{ platform: "Copilot", path: ".copilot/agents/", color: COLORS.blue },
									{ platform: "Claude", path: ".claude/agents/", color: COLORS.purple },
									{ platform: "Cursor", path: ".cursor/rules/", color: COLORS.orange },
								]}
							/>
							<Caption text="Prefixed: myapp-api-scaffolder" />
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
					lineHeight: 1.5,
				}}
			>
				<span style={{ color: COLORS.orange, fontWeight: 700 }}>Cursor note:</span>{" "}
				there's no dedicated agents folder — agents are authored as{" "}
				<span style={{ fontFamily: "monospace" }}>.mdc</span> rules, so they live
				alongside your other rules in{" "}
				<span style={{ fontFamily: "monospace" }}>.cursor/rules/</span>.
			</div>
		</SceneFrame>
	);
};
