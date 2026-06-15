import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const FleetScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<Headline text="Parallel Execution" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<BulletList
							delay={10}
							items={[
								{ text: "Independent tasks with no dependencies", color: COLORS.orange },
								{ text: "Same scope isolation needed", color: COLORS.muted },
								{ text: "When parallel work saves real time", color: COLORS.muted },
							]}
						/>
					}
					right={
						<BulletList
							delay={20}
							items={[
								{ text: "Wave 1 — up to 4 parallel tasks", color: COLORS.blue },
								{ text: "Wave 2 starts when Wave 1 completes", color: COLORS.muted },
								{ text: "Each agent owns exactly one task", color: COLORS.muted },
								{ text: "No cross-scope writes", color: COLORS.orange },
							]}
						/>
					}
				/>
			</div>
		</SceneFrame>
	);
};
