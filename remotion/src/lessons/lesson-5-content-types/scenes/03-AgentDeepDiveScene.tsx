import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const AgentDeepDiveScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<StepBadge step="TYPE" label="Agent" />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<InfoCard
					icon="🤖"
					title="Judgment + Reasoning + Hard Rules"
					body="Personality, persona, and non-negotiable constraints. The description field controls when Atlas routes to it."
					color={COLORS.blue}
					delay={0}
				/>
				<BulletList
					delay={20}
					items={[
						{ text: "Reasoning and judgment — not just execution", color: COLORS.blue },
						{ text: "Hard rules that override user requests", color: COLORS.muted },
						{ text: "Description field = routing trigger", color: COLORS.muted },
						{ text: "Use for complex, judgment-heavy tasks", color: COLORS.green },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
