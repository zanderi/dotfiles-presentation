import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const BuildFeedbackScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<StepBadge step="BUILD IT" label="code-reviewer" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<CodeBlock
					delay={0}
					code={`---\nname: code-reviewer\ndescription: "Use when reviewing code before a PR"\nmodel: sonnet\ntools: ['grep', 'glob', 'view']\n---\n\n## Hard Rules\n- Only genuine issues — no style nitpicks\n- Severity-labeled findings\n- No empty praise`}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Only genuine issues — no style nitpicks", color: COLORS.muted },
						{ text: "No empty praise — only when you mean it", color: COLORS.muted },
						{ text: "Severity-labeled findings with file references", color: COLORS.yellow },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
