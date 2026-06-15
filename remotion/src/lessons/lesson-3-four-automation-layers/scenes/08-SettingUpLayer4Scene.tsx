import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const SettingUpLayer4Scene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<StepBadge step="LAYER 4 SETUP" label="Husky" />
			<Headline text="Setting Up Layer 4" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<CodeBlock
					delay={10}
					code={`npm install --save-dev husky\nnpx husky init\nnpx husky add .husky/pre-commit "npx lint-staged"\nnpx husky add .husky/commit-msg`}
				/>

				<BulletList
					delay={40}
					items={[
						{ text: "Fast — under 10 seconds on every commit", color: COLORS.green },
						{ text: "Fixes what it can automatically", color: COLORS.muted },
						{ text: "Blocks on unfixable issues with clear errors", color: COLORS.orange },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
