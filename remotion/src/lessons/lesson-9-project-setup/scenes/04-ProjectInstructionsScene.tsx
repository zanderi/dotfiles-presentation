import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const ProjectInstructionsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="The Most Important File in the Repo" size="md" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<CodeBlock
					delay={10}
					code={`# .github/copilot-instructions.md\n\n## Tech Stack\n## Architecture Patterns\n## Naming Conventions\n## Non-Negotiables`}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Loads into every conversation", color: COLORS.blue },
						{ text: "Shapes every agent's behavior", color: COLORS.muted },
						{ text: "If instructions drift from reality — every agent works from stale context", color: COLORS.red },
						{ text: "Treat it like code — version it, fix drift like a bug", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
