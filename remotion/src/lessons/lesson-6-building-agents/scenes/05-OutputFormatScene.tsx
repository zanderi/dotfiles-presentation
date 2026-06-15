import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const OutputFormatScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<Headline text="Specify Output Explicitly" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<InfoCard
					icon="📋"
					title="What the Output Looks Like"
					body="If the agent produces a report — say what it looks like. If it creates files — say where they go. If it asks questions — say when."
					color={COLORS.yellow}
					delay={0}
				/>
				<BulletList
					delay={25}
					items={[
						{ text: "Severity-labeled findings (High / Medium / Low)", color: COLORS.muted },
						{ text: "File and line references", color: COLORS.muted },
						{ text: "Clear, actionable recommendations", color: COLORS.muted },
						{ text: "Consistency is the point", color: COLORS.yellow },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
