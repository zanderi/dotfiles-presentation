import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const RunningFleetScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Execute — Then Review" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "Launch the fleet", color: COLORS.blue },
						{ text: "Each agent works in isolation on its assigned task", color: COLORS.muted },
						{ text: "When a wave completes — review before launching the next", color: COLORS.blue },
						{ text: "Bad context in Wave 1 = bad output in Wave 3", color: COLORS.red },
						{ text: "Don't approve wave outputs blindly", color: COLORS.orange },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
