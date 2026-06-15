import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const InstructionFileScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<StepBadge step="TYPE" label="Instruction File" />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<InfoCard
					icon="📄"
					title="Always-On Background Context"
					body="Lives in .github/instructions/. Active in every conversation. No trigger. Shapes all responses."
					color={COLORS.muted}
					delay={0}
				/>
				<BulletList
					delay={20}
					items={[
						{ text: "Passive — loaded without being invoked", color: COLORS.muted },
						{ text: "Model-agnostic — works everywhere", color: COLORS.muted },
						{ text: "If it's a standing rule, it belongs here", color: COLORS.green },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
