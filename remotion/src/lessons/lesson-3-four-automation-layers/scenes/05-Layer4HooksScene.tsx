import React from "react";
import { COLORS, FONT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const Layer4HooksScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<StepBadge step="LAYER 4" label="Git Hooks & CI/CD" />
			<Headline text="Git Hooks & CI/CD" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<InfoCard
					icon="🔧"
					title="Fires at Git Events — No Judgment"
					body="pre-commit, commit-msg, push triggers. Husky manages local hooks. GitHub Actions handles remote enforcement."
					color={COLORS.orange}
					delay={10}
				/>

				<BulletList
					delay={30}
					items={[
						{ text: "This is the layer that fires at git events — not agents", color: COLORS.orange },
						{ text: "No judgment — runs the same check every time", color: COLORS.muted },
						{ text: "Local (Husky) + Remote (CI) = full coverage", color: COLORS.muted },
					]}
				/>

				<div
					style={{
						fontFamily: FONT,
						fontSize: 20,
						fontWeight: 700,
						color: COLORS.orange,
						background: `${COLORS.orange}15`,
						border: `1px solid ${COLORS.orange}44`,
						borderRadius: 8,
						padding: "12px 20px",
					}}
				>
					⚠️ Hooks enforce. They don't decide.
				</div>
			</div>
		</SceneFrame>
	);
};
