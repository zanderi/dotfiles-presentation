import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const CategoryNamingScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<Headline text="Category & Naming" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<BulletList
							delay={10}
							items={[
								{ text: "~/.copilot/agents/", color: COLORS.blue },
								{ text: "Available in every project", color: COLORS.muted },
								{ text: "Verb-noun: security-auditor", color: COLORS.muted },
								{ text: "pr-description-writer", color: COLORS.muted },
							]}
						/>
					}
					right={
						<BulletList
							delay={20}
							items={[
								{ text: ".copilot/agents/", color: COLORS.purple },
								{ text: "Scoped to this codebase only", color: COLORS.muted },
								{ text: "Project-prefixed: myapp-api-scaffolder", color: COLORS.muted },
							]}
						/>
					}
				/>
			</div>
		</SceneFrame>
	);
};
