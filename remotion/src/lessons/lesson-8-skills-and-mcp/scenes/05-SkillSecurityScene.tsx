import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const SkillSecurityScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.red}>
			<Headline text="Audit Before You Enable" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<div
					style={{
						opacity: fadeIn(10),
						background: `${COLORS.red}15`,
						border: `2px solid ${COLORS.red}`,
						borderRadius: 12,
						padding: "16px 24px",
						fontFamily: FONT,
						fontSize: 20,
						color: COLORS.text,
						lineHeight: 1.5,
					}}
				>
					⚠️ Before enabling any skill from an external source, read every line of SKILL.md and every script.
				</div>

				<BulletList
					delay={25}
					items={[
						{ text: "Unexpected network calls (curl, wget)", color: COLORS.red },
						{ text: "Obfuscated strings", color: COLORS.red },
						{ text: "File writes outside project directory", color: COLORS.red },
						{ text: "Elevated permission requests", color: COLORS.red },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(50),
						fontFamily: FONT,
						fontSize: 20,
						fontWeight: 700,
						color: COLORS.red,
					}}
				>
					No sandbox. Same access as you.
				</div>
			</div>
		</SceneFrame>
	);
};
