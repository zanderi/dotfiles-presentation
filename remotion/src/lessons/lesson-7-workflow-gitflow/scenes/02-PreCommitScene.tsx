import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const PreCommitScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<StepBadge step="PRE-COMMIT" label="Hook" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<CodeBlock
					delay={0}
					code={`# .husky/pre-commit\nnpx lint-staged`}
				/>
				<BulletList
					delay={25}
					items={[
						{ text: "Runs only on staged files (lint-staged)", color: COLORS.muted },
						{ text: "Prettier formats automatically", color: COLORS.muted },
						{ text: "ESLint fixes auto-fixable issues", color: COLORS.muted },
						{ text: "Blocks on unfixable — with clear error", color: COLORS.orange },
						{ text: "Target: under 10 seconds", color: COLORS.green },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
