import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const LintStagedScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<Headline text="Only Run on Staged Files" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<CodeBlock
					delay={10}
					code={`// package.json\n"lint-staged": {\n  "*.{ts,tsx}": ["prettier --write", "eslint --fix"],\n  "*.md": ["prettier --write"]\n}`}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Fast — skips untouched files", color: COLORS.green },
						{ text: "Silently auto-fixes formatting", color: COLORS.muted },
						{ text: "Developer stops thinking about formatting", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
