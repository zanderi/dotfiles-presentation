import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const DoerLayerScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Doer Layer" size="lg" delay={0} />
			<div style={{ marginTop: 12, marginBottom: 16 }}>
				<StepBadge step="BUSINESS" label="DOERS" />
			</div>
			<div style={{ flex: 1 }}>
				<BulletList
					delay={15}
					items={[
						{ text: "technical-writer — user docs, onboarding, stakeholder summaries", color: COLORS.green },
						{ text: "changelog-writer — generates version entries", color: COLORS.muted },
						{ text: "release-notes-writer — translates commits into human-readable summaries", color: COLORS.muted },
						{ text: "docs-sync-writer — keeps developer docs in sync with codebase", color: COLORS.muted },
						{ text: "The writing work that developers defer indefinitely", color: COLORS.blue },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
