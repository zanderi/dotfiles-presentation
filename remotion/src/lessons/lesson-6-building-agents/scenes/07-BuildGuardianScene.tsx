import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const BuildGuardianScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<StepBadge step="BUILD IT" label="env-config-reviewer" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<CodeBlock
					delay={0}
					code={`---\nname: env-config-reviewer\ndescription: "Use when checking for exposed secrets"\ntools: ['grep', 'glob', 'view']\n---\n\n## Hard Rules\n- Never modify files. Report only.\n## Checks\n- .gitignore coverage\n- Hardcoded credential patterns`}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Never modifies files — reads and reports only", color: COLORS.red },
						{ text: "Output: clear / at-risk / critical per file", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
