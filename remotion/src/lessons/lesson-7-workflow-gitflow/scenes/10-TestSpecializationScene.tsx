import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";
import { TwoColumn } from "../../../components/TwoColumn";

export const TestSpecializationScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<Headline text="Specialized Test Agents Catch Different Bugs" size="md" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<TwoColumn
					delay={10}
					left={
						<InfoCard
							icon="✅"
							title="API tests passed"
							body="All endpoints validated. Contracts correct. Clean."
							color={COLORS.green}
							delay={10}
						/>
					}
					right={
						<InfoCard
							icon="🐛"
							title="UI tests found 8 bugs"
							body="Field name mismatches, missing query params, silent data loss — all in the integration layer."
							color={COLORS.red}
							delay={20}
						/>
					}
				/>
				<BulletList
					delay={40}
					items={[
						{ text: "API agents and UI agents report on different failure modes", color: COLORS.blue },
						{ text: "Build your testing agents before implementation starts — not after", color: COLORS.orange },
						{ text: "If you only run one type of test, you're measuring one dimension", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
