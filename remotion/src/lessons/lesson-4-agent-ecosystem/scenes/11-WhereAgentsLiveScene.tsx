import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const WhereAgentsLiveScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Where Agents Live" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
							<BulletList
								delay={10}
								items={[
									{ text: "~/.copilot/agents/", color: COLORS.blue },
									{ text: "Available in every project", color: COLORS.muted },
									{ text: "Verb-noun names: security-auditor", color: COLORS.muted },
								]}
							/>
						</div>
					}
					right={
						<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
							<BulletList
								delay={20}
								items={[
									{ text: ".copilot/agents/", color: COLORS.purple },
									{ text: "Scoped to this codebase", color: COLORS.muted },
									{ text: "Prefixed: myapp-api-scaffolder", color: COLORS.muted },
								]}
							/>
						</div>
					}
				/>
			</div>
		</SceneFrame>
	);
};
