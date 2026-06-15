import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const ClosingScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.green}>
			<StepBadge step="SUMMARY" label="Five Types. One Decision Tree." />
			<Headline text="Five Types. One Decision Tree." size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "Agent — judgment + reasoning", color: COLORS.blue },
						{ text: "Workflow Agent — fixed pipeline", color: COLORS.purple },
						{ text: "Instruction File — standing rules", color: COLORS.muted },
						{ text: "Skill — auto-invocation", color: COLORS.green },
						{ text: "Prompt Template — reusable structure", color: COLORS.yellow },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(50),
						fontFamily: FONT,
						fontSize: 20,
						color: COLORS.muted,
					}}
				>
					Run the tree before you build. Exercise 5 walks you through it.
				</div>
			</div>
		</SceneFrame>
	);
};
