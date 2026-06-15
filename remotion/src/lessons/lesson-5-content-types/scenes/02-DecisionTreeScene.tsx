import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

type DecisionNode = { question: string; answer: string; color: string };

const NODES: DecisionNode[] = [
	{ question: "Needs judgment + multi-step reasoning?", answer: "→ Agent", color: COLORS.blue },
	{ question: "Chains specialists in a fixed sequence?", answer: "→ Workflow Agent", color: COLORS.purple },
	{ question: "Always-on background context?", answer: "→ Instruction File", color: COLORS.muted },
	{ question: "Stateless, auto-invoked by description?", answer: "→ Skill", color: COLORS.green },
	{ question: "Otherwise:", answer: "→ Prompt Template", color: COLORS.yellow },
];

export const DecisionTreeScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 18], [15, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Pick the Right Type" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, marginTop: 28 }}>
				{NODES.map((node, i) => (
					<div
						key={node.question}
						style={{
							opacity: fadeIn(10 + i * 12),
							transform: `translateY(${slideUp(10 + i * 12)}px)`,
							display: "flex",
							alignItems: "center",
							gap: 24,
							background: COLORS.surface,
							border: `1px solid ${node.color}44`,
							borderRadius: 8,
							padding: "14px 20px",
						}}
					>
						<div style={{ flex: 1, fontFamily: FONT, fontSize: 19, color: COLORS.text }}>
							{node.question}
						</div>
						<div style={{ fontFamily: FONT, fontSize: 19, fontWeight: 700, color: node.color, whiteSpace: "nowrap" as const }}>
							{node.answer}
						</div>
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
