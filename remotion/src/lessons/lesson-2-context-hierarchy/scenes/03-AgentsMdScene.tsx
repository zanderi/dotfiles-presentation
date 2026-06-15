import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const AgentsMdScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="AGENTS.md" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<InfoCard
					icon="⚖️"
					title="The Repo Constitution"
					body="Model-agnostic. Not Copilot-specific — any AI assistant that follows the convention reads it. Architecture decisions, security constraints, things that never change without a team discussion."
					color={COLORS.purple}
					delay={10}
				/>
				<BulletList
					delay={30}
					items={[
						{ text: "Everything else is policy", color: COLORS.muted },
						{ text: "AGENTS.md is the constitution", color: COLORS.purple },
						{ text: "Works across Copilot, Cursor, Claude — any convention-following tool", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
