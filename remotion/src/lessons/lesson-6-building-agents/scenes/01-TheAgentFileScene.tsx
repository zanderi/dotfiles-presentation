import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const TheAgentFileScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<Headline text="An Agent Is a File" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<CodeBlock
					delay={10}
					code={`---\nname: my-agent\ndescription: "Use this when you need to..."\nmodel: sonnet\ntools: ['grep', 'glob', 'view']\n---\n\n## Instructions\n...`}
				/>

				<BulletList
					delay={40}
					items={[
						{ text: "No compiled code. No deployment. No infrastructure.", color: COLORS.muted },
						{ text: "model — match the engine to the job (Haiku for light, Opus for heavy)", color: COLORS.blue },
						{ text: "Five fields: name, description, model, tools, body", color: COLORS.yellow },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
