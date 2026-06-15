import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const CommitMsgScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<StepBadge step="COMMIT-MSG" label="Hook" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<CodeBlock
					delay={0}
					code={`# .husky/commit-msg\nCOMMIT_MSG=$(cat "$1")\nREGEX="^(feat|fix|refactor|docs|test|chore|style)(\\(.+\\))?: .+"\nif ! echo "$COMMIT_MSG" | grep -qE "$REGEX"; then\n  echo "Invalid commit message format"\n  exit 1\nfi`}
				/>
				<BulletList
					delay={40}
					items={[
						{ text: "Valid types: feat, fix, refactor, docs, test, chore, style", color: COLORS.muted },
						{ text: "Commit rejected with clear error if format invalid", color: COLORS.orange },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
