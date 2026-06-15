import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const WorkflowAgentScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<StepBadge step="TYPE" label="Workflow Agent" />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<InfoCard
					icon="🔗"
					title="Fixed Pipeline — No Judgment"
					body="Chains specialists in sequence. No judgment of its own. Sequence is known and repeatable."
					color={COLORS.purple}
					delay={0}
				/>
				<BulletList
					delay={20}
					items={[
						{ text: "Phase 1 → Phase 2 → Phase 3", color: COLORS.purple },
						{ text: "Each phase delegates to a specialist agent", color: COLORS.muted },
						{ text: "Example: feature-pr-gate", color: COLORS.muted },
						{ text: "One invocation — all quality gates covered", color: COLORS.green },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
