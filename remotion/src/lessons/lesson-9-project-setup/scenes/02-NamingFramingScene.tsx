import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const NamingFramingScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Start Here — Before AI" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<InfoCard
					icon="📝"
					title="Write One Paragraph"
					body="What is this project? Who is it for? What problem does it solve?"
					color={COLORS.blue}
					delay={10}
				/>
				<BulletList
					delay={30}
					items={[
						{ text: "Becomes the seed for copilot-instructions.md", color: COLORS.muted },
						{ text: "Becomes the seed for agent descriptions", color: COLORS.muted },
						{ text: "Ambiguity here propagates everywhere downstream", color: COLORS.red },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
