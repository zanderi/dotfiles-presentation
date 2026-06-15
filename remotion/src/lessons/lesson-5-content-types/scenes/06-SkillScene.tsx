import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const SkillScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<StepBadge step="TYPE" label="Skill" />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<InfoCard
					icon="⚡"
					title="Auto-Invoked, Stateless, Single-Purpose"
					body="Description match triggers it. Can run scripts. No memory or reasoning. Consistent and reliable."
					color={COLORS.green}
					delay={0}
				/>
				<BulletList
					delay={20}
					items={[
						{ text: "Semi-automatic — description match fires it", color: COLORS.green },
						{ text: "Can run shell scripts — real execution", color: COLORS.muted },
						{ text: "No state between invocations", color: COLORS.muted },
						{ text: "Example: validate-commit-message", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
