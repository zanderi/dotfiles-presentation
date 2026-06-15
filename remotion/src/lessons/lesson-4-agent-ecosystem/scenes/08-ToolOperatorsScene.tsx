import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const ToolOperatorsScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<StepBadge step="CATEGORY" label="Tool Operators" />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 16 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "pr-description-writer — generates PR descriptions from diffs", color: COLORS.yellow },
						{ text: "changelog-writer — produces Keep a Changelog entries", color: COLORS.yellow },
						{ text: "github-issue-creator — turns findings into tracked issues", color: COLORS.yellow },
					]}
				/>

				<div
					style={{
						opacity: fadeIn(40),
						background: `${COLORS.yellow}15`,
						border: `1px solid ${COLORS.yellow}44`,
						borderRadius: 8,
						padding: "14px 20px",
						fontFamily: FONT,
						fontSize: 19,
						color: COLORS.muted,
						lineHeight: 1.5,
					}}
				>
					These agents are why MCP matters — they read and write GitHub, Jira, and other platforms directly.
				</div>
			</div>
		</SceneFrame>
	);
};
