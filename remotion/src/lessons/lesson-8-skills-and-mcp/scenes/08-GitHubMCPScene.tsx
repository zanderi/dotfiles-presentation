import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";
import { CodeBlock } from "../../../components/CodeBlock";

export const GitHubMCPScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="GitHub MCP Server" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "Read issues and PRs in real time", color: COLORS.muted },
						{ text: "Create issues and pull requests", color: COLORS.muted },
						{ text: "Comment on PRs from the CLI", color: COLORS.muted },
						{ text: "No browser needed", color: COLORS.green },
					]}
				/>
				<CodeBlock delay={35} code={`/mcp show`} />
			</div>
		</SceneFrame>
	);
};
