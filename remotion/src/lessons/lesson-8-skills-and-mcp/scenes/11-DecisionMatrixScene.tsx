import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";

export const DecisionMatrixScene: React.FC = () => {
	const frame = useCurrentFrame();

	const slideIn = (delay: number) => ({
		opacity: interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		}),
		transform: `translateY(${interpolate(frame, [delay, delay + 20], [20, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		})}px)`,
	});

	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="Skills vs MCP — When to Use Which" size="md" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "row", gap: 20, marginTop: 32, alignItems: "stretch" }}>
				<div style={{ ...slideIn(10), flex: 1 }}>
					<InfoCard
						icon="🛠️"
						title="Use a Skill"
						body="When you need to run a script, validate input, format output, or do something that requires shell access."
						color={COLORS.green}
					/>
				</div>
				<div style={{ ...slideIn(25), flex: 1 }}>
					<InfoCard
						icon="🔌"
						title="Use MCP"
						body="When you need to read from or write to an external system — GitHub, Jira, Confluence, or your own API."
						color={COLORS.purple}
					/>
				</div>
				<div style={{ ...slideIn(40), flex: 1 }}>
					<InfoCard
						icon="🤖"
						title="Use an Agent"
						body="When you need multi-step reasoning, coordination across sources, or a reusable autonomous workflow."
						color={COLORS.blue}
					/>
				</div>
			</div>
		</SceneFrame>
	);
};
