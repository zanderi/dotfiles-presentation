import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { TwoColumn } from "../../../components/TwoColumn";

export const KeyInsightScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
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
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32 }}>
				<TwoColumn
					left={
						<div
							style={{
								opacity: fadeIn(0),
								transform: `translateY(${slideUp(0)}px)`,
								background: COLORS.surface,
								border: `2px solid ${COLORS.red}`,
								borderRadius: 12,
								padding: 28,
								display: "flex",
								flexDirection: "column",
								gap: 16,
								flex: 1,
							}}
						>
							<div style={{ fontFamily: FONT, fontSize: 28, color: COLORS.red }}>❌ Wrong question</div>
							<div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.muted, lineHeight: 1.5 }}>
								"How do I make agents run at commits?"
							</div>
						</div>
					}
					right={
						<div
							style={{
								opacity: fadeIn(15),
								transform: `translateY(${slideUp(15)}px)`,
								background: COLORS.surface,
								border: `2px solid ${COLORS.green}`,
								borderRadius: 12,
								padding: 28,
								display: "flex",
								flexDirection: "column",
								gap: 16,
								flex: 1,
							}}
						>
							<div style={{ fontFamily: FONT, fontSize: 28, color: COLORS.green }}>✅ Right question</div>
							<div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.muted, lineHeight: 1.5 }}>
								"Which layer handles this responsibility?"
							</div>
						</div>
					}
				/>

				<div
					style={{
						opacity: fadeIn(35),
						transform: `translateY(${slideUp(35)}px)`,
						fontFamily: FONT,
						fontSize: 24,
						color: COLORS.text,
						textAlign: "center" as const,
						padding: "0 80px",
						lineHeight: 1.4,
					}}
				>
					Agents are interactive specialists, not background daemons. That's a feature.
				</div>
			</div>
		</SceneFrame>
	);
};
