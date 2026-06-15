import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const GuardiansScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<StepBadge step="CATEGORY" label="Guardians" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "security-auditor — OWASP Top 10, auth checks, injection risks", color: COLORS.red },
						{ text: "env-config-reviewer — catches hardcoded secrets", color: COLORS.red },
						{ text: "migration-auditor — reviews DB migrations for production safety", color: COLORS.red },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(40),
						background: `${COLORS.red}15`,
						border: `1px solid ${COLORS.red}44`,
						borderRadius: 8,
						padding: "14px 20px",
						fontFamily: FONT,
						fontSize: 20,
						fontWeight: 700,
						color: COLORS.red,
					}}
				>
					Guardians are not optional. A pipeline without guardians ships vulnerabilities.
				</div>
			</div>
		</SceneFrame>
	);
};
