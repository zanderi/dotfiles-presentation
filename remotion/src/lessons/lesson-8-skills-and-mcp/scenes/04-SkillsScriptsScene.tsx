import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const SkillsScriptsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="Scripts Give Skills Teeth" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<CodeBlock
					delay={10}
					code={`#!/bin/bash\n# validate.sh\nMSG=$(cat "$1")\nif ! echo "$MSG" | grep -qE "^(feat|fix|refactor|docs|test|chore): .+"; then\n  echo "Invalid commit format"\n  exit 1\nfi`}
				/>
				<BulletList
					delay={40}
					items={[
						{ text: "Same access as the user", color: COLORS.muted },
						{ text: "Read files, write files, execute commands", color: COLORS.muted },
						{ text: "Powerful — and why you audit before enabling", color: COLORS.red },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
