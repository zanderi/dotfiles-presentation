import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { CodeBlock } from "../../../components/CodeBlock";
import { BulletList } from "../../../components/BulletList";

export const CIIntegrationScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<StepBadge step="GITHUB ACTIONS" label="CI Integration" />
			<Headline text="Remote Enforcement" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<CodeBlock
					delay={10}
					code={`# .github/workflows/ci.yml\non: [push]\njobs:\n  ci:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: npm ci\n      - run: npm run lint\n      - run: npm test`}
				/>

				<BulletList
					delay={45}
					items={[
						{ text: "Catches what local hooks miss", color: COLORS.green },
						{ text: "Enforced for every contributor", color: COLORS.muted },
						{ text: "Required to merge — no exceptions", color: COLORS.orange },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
