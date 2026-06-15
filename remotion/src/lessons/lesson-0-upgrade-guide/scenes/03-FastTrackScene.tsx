import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";

type LessonRow = {
	num: string;
	title: string;
	badge: string;
	badgeColor: string;
};

const ROWS: LessonRow[] = [
	{ num: "1", title: "AI Env Setup", badge: "⏭️ SKIP", badgeColor: COLORS.muted },
	{ num: "2", title: "Dev Fundamentals", badge: "⏭️ SKIP", badgeColor: COLORS.muted },
	{ num: "3", title: "Four Automation Layers", badge: "🔴 START HERE", badgeColor: COLORS.red },
	{ num: "4", title: "Agent Ecosystem", badge: "📖 READ", badgeColor: COLORS.blue },
	{ num: "5", title: "Content Types", badge: "🔴 PRIORITY", badgeColor: COLORS.red },
	{ num: "6", title: "Building Agents", badge: "📖 READ", badgeColor: COLORS.blue },
	{ num: "7", title: "Workflow & GitFlow", badge: "🔴 PRIORITY", badgeColor: COLORS.red },
	{ num: "8", title: "Skills & MCP", badge: "📖 READ", badgeColor: COLORS.blue },
	{ num: "9", title: "AI-First Project Setup", badge: "📖 READ", badgeColor: COLORS.blue },
	{ num: "10", title: "Business Ecosystem", badge: "🔴 PRIORITY", badgeColor: COLORS.red },
];

export const FastTrackScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [15, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="Your Fast-Track Path" size="lg" delay={0} />

			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: 10,
					marginTop: 24,
				}}
			>
				{ROWS.map((row, i) => (
					<div
						key={row.num}
						style={{
							opacity: fadeIn(10 + i * 8),
							transform: `translateY(${slideUp(10 + i * 8)}px)`,
							display: "flex",
							alignItems: "center",
							gap: 16,
							background: COLORS.surface,
							border: `1px solid ${COLORS.border}`,
							borderRadius: 8,
							padding: "10px 18px",
						}}
					>
						<div
							style={{
								fontFamily: FONT,
								fontSize: 16,
								fontWeight: 700,
								color: COLORS.muted,
								width: 24,
								textAlign: "center" as const,
							}}
						>
							{row.num}
						</div>
						<div
							style={{
								flex: 1,
								fontFamily: FONT,
								fontSize: 18,
								color: COLORS.text,
							}}
						>
							{row.title}
						</div>
						<div
							style={{
								fontFamily: FONT,
								fontSize: 14,
								fontWeight: 700,
								color: row.badgeColor,
								background: `${row.badgeColor}22`,
								border: `1px solid ${row.badgeColor}55`,
								borderRadius: 6,
								padding: "4px 10px",
							}}
						>
							{row.badge}
						</div>
					</div>
				))}
			</div>
		</SceneFrame>
	);
};
