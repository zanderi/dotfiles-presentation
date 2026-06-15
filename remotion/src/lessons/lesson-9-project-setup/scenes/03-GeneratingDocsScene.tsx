import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const GeneratingDocsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Use AI to Generate the Foundation" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "Project README", color: COLORS.blue },
						{ text: "Architecture overview", color: COLORS.blue },
						{ text: "Tech stack decisions with rationale", color: COLORS.blue },
						{ text: "Data model sketch", color: COLORS.blue },
					]}
				/>
				<BulletList
					delay={40}
					items={[
						{ text: "Doesn't need to be perfect — good enough to give agents accurate context", color: COLORS.muted },
						{ text: "Context quality = output quality", color: COLORS.green },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
