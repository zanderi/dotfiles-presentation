import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const HardRulesScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<Headline text="Hard Rules — What Makes an Agent Reliable" size="md" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "Never modify files outside the repo root", color: COLORS.green },
						{ text: "Always ask before making git commits", color: COLORS.green },
						{ text: "Never generate code that disables authentication", color: COLORS.green },
						{ text: "Report findings — never silently ignore them", color: COLORS.green },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(50),
						background: `${COLORS.yellow}15`,
						border: `1px solid ${COLORS.yellow}44`,
						borderRadius: 8,
						padding: "12px 20px",
						fontFamily: FONT,
						fontSize: 19,
						color: COLORS.muted,
					}}
				>
					Non-negotiable. Enforced regardless of what the user asks.
				</div>
			</div>
		</SceneFrame>
	);
};
