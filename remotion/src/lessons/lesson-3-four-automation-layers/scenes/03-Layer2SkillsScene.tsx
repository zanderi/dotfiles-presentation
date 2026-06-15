import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const Layer2SkillsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<StepBadge step="LAYER 2" label="Skills" />
			<Headline text="Skills" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<InfoCard
					icon="⚡"
					title="Auto-Invoked by Description Match"
					body="SKILL.md + optional scripts. Fires when your prompt matches the skill's description. Stateless and single-purpose — can run shell commands."
					color={COLORS.green}
					delay={10}
				/>

				<BulletList
					delay={30}
					items={[
						{ text: "Semi-automatic — description match triggers it", color: COLORS.green },
						{ text: "Can execute scripts with shell access", color: COLORS.muted },
						{ text: "Lighter than an agent, heavier than an instruction", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
