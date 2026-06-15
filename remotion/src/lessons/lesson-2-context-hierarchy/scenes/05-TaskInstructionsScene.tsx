import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const TaskInstructionsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Task Instructions" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<CodeBlock delay={10} code={`.github/instructions/\n  api.instructions.md\n  tests.instructions.md\n  blazor.instructions.md`} />
				<BulletList
					delay={30}
					items={[
						{ text: "Load automatically when the path matches", color: COLORS.blue },
						{ text: "Right rules for the right files at the right time", color: COLORS.muted },
						{ text: "Granular is better than one giant file", color: COLORS.green },
						{ text: "No path match = not loaded = no noise in unrelated contexts", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
