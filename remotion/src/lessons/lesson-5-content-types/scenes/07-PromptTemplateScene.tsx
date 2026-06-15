import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const PromptTemplateScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<StepBadge step="TYPE" label="Prompt Template" />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<InfoCard
					icon="📝"
					title="Reusable Starting Point"
					body="Invoked intentionally. Provides structure. You fill in the specifics. Not automated."
					color={COLORS.yellow}
					delay={0}
				/>
				<BulletList
					delay={20}
					items={[
						{ text: "Not automatic — you invoke it deliberately", color: COLORS.yellow },
						{ text: "Gives consistent structure to repeated tasks", color: COLORS.muted },
						{ text: "Use for: ADRs, incident reports, feature specs", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
