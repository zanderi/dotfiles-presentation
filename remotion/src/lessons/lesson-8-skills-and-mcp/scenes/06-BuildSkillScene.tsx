import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const BuildSkillScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="Build validate-commit-message" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<CodeBlock
					delay={10}
					code={`# SKILL.md\n---\nname: validate-commit-message\ndescription: "Use this when validating a commit message"\ntools: ['shell']\n---\n\nRun validate.sh with the commit message.`}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Create dir at ~/.copilot/skills/validate-commit-message/", color: COLORS.muted },
						{ text: "/skills reload", color: COLORS.green },
						{ text: "Trigger naturally in a prompt — it fires", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
