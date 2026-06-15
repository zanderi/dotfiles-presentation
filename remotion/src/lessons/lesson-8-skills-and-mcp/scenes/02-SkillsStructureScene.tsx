import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const SkillsStructureScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="A Skill Is a Directory" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<CodeBlock
					delay={10}
					code={`~/.copilot/skills/validate-commit-message/\n  SKILL.md\n  validate.sh`}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "SKILL.md defines name, description, tools, instructions", color: COLORS.green },
						{ text: "Scripts give skills shell access", color: COLORS.muted },
						{ text: "Lighter than an agent, heavier than an instruction", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
