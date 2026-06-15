import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const Layer1InstructionsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<StepBadge step="LAYER 1" label="Instructions" />
			<Headline text="Instruction Files" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<InfoCard
					icon="📄"
					title="Always On — Never Called"
					body="Lives in .github/instructions/ — loaded into every conversation, no trigger required, passive background context."
					color={COLORS.blue}
					delay={10}
				/>

				<BulletList
					delay={30}
					items={[
						{ text: "Standing orders — always active", color: COLORS.blue },
						{ text: "Shapes every response without being invoked", color: COLORS.muted },
						{ text: "Model-agnostic — works with any AI tool", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
