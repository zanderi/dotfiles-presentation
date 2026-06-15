import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";

export const FiveTypesScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Five Content Types" size="lg" delay={0} />

			<div
				style={{
					flex: 1,
					display: "flex",
					gap: 20,
					marginTop: 32,
					alignItems: "stretch",
				}}
			>
				{[
					{ icon: "🤖", title: "Agent", body: "Judgment + reasoning + hard rules", color: COLORS.blue, delay: 10 },
					{ icon: "🔗", title: "Workflow Agent", body: "Fixed pipeline — no judgment", color: COLORS.purple, delay: 22 },
					{ icon: "📄", title: "Instruction File", body: "Always-on background context", color: COLORS.muted, delay: 34 },
					{ icon: "⚡", title: "Skill", body: "Stateless, auto-invoked", color: COLORS.green, delay: 46 },
					{ icon: "📝", title: "Prompt Template", body: "Reusable starting point", color: COLORS.yellow, delay: 58 },
				].map((card) => (
					<div key={card.title} style={{ flex: 1, opacity: fadeIn(card.delay) }}>
						<InfoCard icon={card.icon} title={card.title} body={card.body} color={card.color} delay={card.delay} />
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
