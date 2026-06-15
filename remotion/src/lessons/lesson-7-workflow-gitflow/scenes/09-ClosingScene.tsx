import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";

export const ClosingScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 25], [20, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.orange}>
			<div
				style={{
					flex: 1,
					display: "flex",
					gap: 24,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{[
					{ icon: "🔧", text: "Hooks enforce.", color: COLORS.orange, delay: 0 },
					{ icon: "🤖", text: "Agents judge.", color: COLORS.blue, delay: 20 },
					{ icon: "👤", text: "You decide.", color: COLORS.green, delay: 40 },
				].map((card) => (
					<div
						key={card.text}
						style={{
							opacity: fadeIn(card.delay),
							transform: `translateY(${slideUp(card.delay)}px)`,
							flex: 1,
							background: COLORS.surface,
							border: `2px solid ${card.color}`,
							borderRadius: 16,
							padding: "40px 24px",
							textAlign: "center" as const,
							display: "flex",
							flexDirection: "column",
							gap: 16,
						}}
					>
						<div style={{ fontSize: 52 }}>{card.icon}</div>
						<div style={{ fontFamily: FONT, fontSize: 32, fontWeight: 700, color: card.color }}>
							{card.text}
						</div>
					</div>
				))}
			</div>

			<div
				style={{
					opacity: fadeIn(60),
					fontFamily: FONT,
					fontSize: 20,
					color: COLORS.muted,
					textAlign: "center" as const,
				}}
			>
				Not competing tools — complementary layers. Nothing slips through.
			</div>
		</SceneFrame>
	);
};
