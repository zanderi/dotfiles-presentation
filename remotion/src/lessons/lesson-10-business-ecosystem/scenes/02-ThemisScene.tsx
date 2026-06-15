import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const ThemisScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Themis" size="xl" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<InfoCard
					icon="⚖️"
					title="The Business Orchestrator"
					body="Named after the Titan of divine law and governance. Coordinates the business pipeline: research → define → validate → communicate."
					color={COLORS.green}
					delay={10}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "When a task is business-domain — Themis owns it", color: COLORS.green },
						{ text: "Atlas handles the code", color: COLORS.blue },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
