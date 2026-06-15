import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";

const OLD_LESSONS = ["Lesson 1 — AI Env Setup", "Lesson 2 — Agent Orchestration"];
const NEW_LESSONS = [
	"0 — Upgrade Guide",
	"1 — AI Env Setup",
	"2 — Dev Fundamentals",
	"3 — Four Automation Layers",
	"4 — Agent Ecosystem",
	"5 — Content Types",
	"6 — Building Agents",
	"7 — Workflow & GitFlow",
	"8 — Skills & MCP",
	"9 — Project Setup",
	"10 — Business Ecosystem",
];

export const WhatChangedScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [20, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="What Changed" size="lg" delay={0} />
			<div
				style={{
					opacity: fadeIn(10),
					transform: `translateY(${slideUp(10)}px)`,
					fontFamily: FONT,
					fontSize: 26,
					color: COLORS.muted,
					marginBottom: 32,
				}}
			>
				From 2 lessons to 10
			</div>

			<TwoColumn
				left={
					<div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
						<div
							style={{
								opacity: fadeIn(15),
								fontFamily: FONT,
								fontSize: 20,
								fontWeight: 700,
								color: COLORS.muted,
								textTransform: "uppercase" as const,
								letterSpacing: 1,
							}}
						>
							Old Curriculum
						</div>
						{OLD_LESSONS.map((l, i) => (
							<div
								key={l}
								style={{
									opacity: fadeIn(20 + i * 10),
									transform: `translateY(${slideUp(20 + i * 10)}px)`,
									background: COLORS.surface,
									border: `1px solid ${COLORS.border}`,
									borderRadius: 8,
									padding: "10px 16px",
									fontFamily: FONT,
									fontSize: 18,
									color: COLORS.text,
								}}
							>
								{l}
							</div>
						))}
					</div>
				}
				right={
					<div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
						<div
							style={{
								opacity: fadeIn(15),
								fontFamily: FONT,
								fontSize: 20,
								fontWeight: 700,
								color: COLORS.purple,
								textTransform: "uppercase" as const,
								letterSpacing: 1,
							}}
						>
							New Curriculum
						</div>
						{NEW_LESSONS.map((l, i) => (
							<div
								key={l}
								style={{
									opacity: fadeIn(25 + i * 5),
									transform: `translateY(${slideUp(25 + i * 5)}px)`,
									background: COLORS.surface,
									border: `1px solid ${COLORS.purple}33`,
									borderRadius: 8,
									padding: "7px 14px",
									fontFamily: FONT,
									fontSize: 15,
									color: COLORS.text,
								}}
							>
								{l}
							</div>
						))}
					</div>
				}
			/>
		</SceneFrame>
	);
};
