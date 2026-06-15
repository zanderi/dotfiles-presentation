import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const FeedbackScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Feedback" size="lg" delay={0} />
			<div style={{ marginTop: 12, marginBottom: 16 }}>
				<StepBadge step="BUSINESS" label="FEEDBACK" />
			</div>
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
				<InfoCard
					icon="📋"
					title="po-docs-auditor in Audit Mode"
					body="Assesses whether documentation meets product owner standards."
					color={COLORS.green}
					delay={15}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Doer produces, feedback agent evaluates, doer iterates", color: COLORS.muted },
						{ text: "Different audience — stakeholders, POs, end users", color: COLORS.muted },
						{ text: "Same pattern", color: COLORS.green },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
