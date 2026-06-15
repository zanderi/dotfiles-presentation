import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const InstructionsLikeCodeScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Instructions Are Code" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<InfoCard
					icon="⚠️"
					title="Stale instructions are a bug"
					body="If your instructions say one thing and your code does another, Copilot produces code that matches the instructions — not reality."
					color={COLORS.orange}
					delay={10}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Version them with git — treat drift like a bug", color: COLORS.blue },
						{ text: "Review them when you update a major dependency", color: COLORS.blue },
						{ text: "Include them in code review if they changed", color: COLORS.blue },
						{ text: "Accurate context = reliable output. It's that simple.", color: COLORS.green },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
