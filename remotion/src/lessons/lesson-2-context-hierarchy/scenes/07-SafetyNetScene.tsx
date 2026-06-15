import React from "react";
import { COLORS, FONT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

const NET_LAYERS = [
	{ label: "Copilot context & instructions", color: COLORS.blue },
	{ label: "Editor linting (ESLint, Roslyn)", color: COLORS.purple },
	{ label: "Pre-commit hooks (Husky, Lefthook)", color: COLORS.green },
	{ label: "CI pipeline (lint, build, test)", color: COLORS.orange },
	{ label: "Code review (human + Copilot review)", color: COLORS.red },
];

export const SafetyNetScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Copilot Is One Layer" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
				{NET_LAYERS.map((layer, i) => (
					<div
						key={layer.label}
						style={{
							background: COLORS.surface,
							border: `1px solid ${layer.color}44`,
							borderLeft: `4px solid ${layer.color}`,
							borderRadius: 8,
							padding: "12px 20px",
							fontFamily: FONT,
							fontSize: 17,
							color: COLORS.text,
							opacity: 0.9,
						}}
					>
						{i + 1}. {layer.label}
					</div>
				))}
			</div>
			<BulletList
				delay={50}
				items={[
					{ text: "Each layer catches what the one before it missed", color: COLORS.muted },
					{ text: "Don't rely on any single net — defence in depth", color: COLORS.orange },
				]}
			/>
		</SceneFrame>
	);
};
