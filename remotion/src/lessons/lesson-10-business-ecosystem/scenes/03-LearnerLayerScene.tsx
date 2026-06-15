import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const LearnerLayerScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Learner Layer" size="lg" delay={0} />
			<div style={{ marginTop: 12, marginBottom: 16 }}>
				<StepBadge step="BUSINESS" label="LEARNERS" />
			</div>
			<div style={{ flex: 1 }}>
				<BulletList
					delay={15}
					items={[
						{ text: "po-docs-auditor — surveys documentation from a PO perspective", color: COLORS.green },
						{ text: "architecture-reader — maps codebase for stakeholders", color: COLORS.muted },
						{ text: "Read before acting — prevent shipping something that doesn't match what was specified", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
