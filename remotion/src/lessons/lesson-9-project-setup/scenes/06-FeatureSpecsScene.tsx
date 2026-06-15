import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";
import { InfoCard } from "../../../components/InfoCard";

export const FeatureSpecsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="The Spec Is the Contract" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
							<InfoCard
								icon="❌"
								title='"Build me a login form"'
								body="Ambiguous. Anything goes."
								color={COLORS.red}
								delay={10}
							/>
						</div>
					}
					right={
						<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
							<InfoCard
								icon="✅"
								title="Feature Spec"
								body="What it does, edge cases, success definition, failure definition."
								color={COLORS.green}
								delay={20}
							/>
						</div>
					}
				/>
				<div style={{ marginTop: 24 }}>
					<BulletList
						delay={35}
						items={[
							{ text: "Not detailed enough to be code", color: COLORS.muted },
							{ text: "Specific enough to be unambiguous", color: COLORS.blue },
						]}
					/>
				</div>
			</div>
		</SceneFrame>
	);
};
