import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const GuardiansScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Guardians" size="lg" delay={0} />
			<div style={{ marginTop: 12, marginBottom: 16 }}>
				<StepBadge step="BUSINESS" label="GUARDIANS" />
			</div>
			<div style={{ flex: 1 }}>
				<BulletList
					delay={15}
					items={[
						{ text: "Protect accuracy and compliance", color: COLORS.green },
						{ text: "Run after doers — catch what slips through", color: COLORS.muted },
						{ text: "A published doc with internal pricing data = as damaging as a committed secret", color: COLORS.red },
						{ text: "Same guardian pattern, different threat model", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
