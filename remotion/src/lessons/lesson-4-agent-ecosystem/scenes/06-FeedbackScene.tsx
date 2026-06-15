import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const FeedbackScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<StepBadge step="CATEGORY" label="Feedback" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "code-reviewer — surfaces bugs, logic errors, bad patterns", color: COLORS.blue },
						{ text: "performance-reviewer — finds bottlenecks and N+1 queries", color: COLORS.blue },
						{ text: "test-coverage-analyzer — identifies coverage gaps", color: COLORS.blue },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(40),
						background: `${COLORS.blue}15`,
						border: `1px solid ${COLORS.blue}44`,
						borderRadius: 8,
						padding: "14px 20px",
						fontFamily: FONT,
						fontSize: 19,
						color: COLORS.muted,
						lineHeight: 1.5,
					}}
				>
					Feedback agents don't fix — they surface. The feedback loop separates a one-shot prompt from an iterative pipeline.
				</div>
			</div>
		</SceneFrame>
	);
};
