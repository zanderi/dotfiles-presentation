import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";

export const ResilienceScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.red}>
			<Headline text="Build Resilience Into the Pipeline" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<InfoCard
					icon="⚡"
					title="Circuit breaker thinking"
					body="If an agent consistently fails, don't retry harder — escalate, reroute, prevent cascading failures. Same pattern you'd use in distributed systems."
					color={COLORS.red}
					delay={10}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Validate agent output automatically — schema checks, linting, semantic checks", color: COLORS.blue },
						{ text: "Don't wait for humans to catch errors; build validation into the pipeline", color: COLORS.blue },
						{ text: "Collect metrics: token spend, bug escape rate, rework cycles per agent", color: COLORS.muted },
						{ text: "An ambiguous instruction to 50 fleet agents multiplies the problem 50×", color: COLORS.orange },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
