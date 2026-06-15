import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";

export const ClosingScene: React.FC = () => {
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
		<SceneFrame accentColor={COLORS.orange}>
			<Headline text="Four Layers. One System." size="lg" delay={0} />

			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: 24,
					marginTop: 32,
				}}
			>
				<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
					<InfoCard icon="📄" title="Layer 1 — Always On" body="Instruction files — passive background context" color={COLORS.blue} delay={10} />
					<InfoCard icon="⚡" title="Layer 2 — Auto-Invoked" body="Skills — description match, stateless" color={COLORS.green} delay={25} />
					<InfoCard icon="🤖" title="Layer 3 — On Demand" body="Agents — judgment, invoked by intent" color={COLORS.blue} delay={40} />
					<InfoCard icon="🔧" title="Layer 4 — At Git Events" body="Hooks & CI — mechanical enforcement" color={COLORS.orange} delay={55} />
				</div>

				<div
					style={{
						opacity: fadeIn(70),
						transform: `translateY(${slideUp(70)}px)`,
						fontFamily: FONT,
						fontSize: 22,
						color: COLORS.muted,
						textAlign: "center" as const,
					}}
				>
					Exercise 3 walks you through building Layer 4. Lesson 4 goes deep on the agent ecosystem.
				</div>
			</div>
		</SceneFrame>
	);
};
