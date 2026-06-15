import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const Layer3AgentsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<StepBadge step="LAYER 3" label="Agents" />
			<Headline text="Agents" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<InfoCard
					icon="🤖"
					title="Interactive Specialists"
					body="Reasoning, judgment, personality, and hard rules. Invoked when you describe your intent — Atlas routes to the right specialist."
					color={COLORS.blue}
					delay={10}
				/>

				<BulletList
					delay={30}
					items={[
						{ text: "On-demand — you invoke by describing intent", color: COLORS.blue },
						{ text: "Not daemons — they don't run in the background", color: COLORS.orange },
						{ text: "Bring judgment to the decision, not mechanics", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
