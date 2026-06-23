import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../constants";

export const PlatformPaths: React.FC<{
	paths: { platform: string; path: string; color: string }[];
	delay?: number;
}> = ({ paths, delay = 0 }) => {
	const frame = useCurrentFrame();

	return (
		<div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
			{paths.map((p, i) => {
				const d = delay + i * 8;
				const opacity = interpolate(frame, [d, d + 15], [0, 1], {
					extrapolateRight: "clamp",
					extrapolateLeft: "clamp",
					easing: EASE_OUT,
				});
				const translateX = interpolate(frame, [d, d + 15], [-20, 0], {
					extrapolateRight: "clamp",
					extrapolateLeft: "clamp",
					easing: EASE_OUT,
				});
				return (
					<div
						key={p.platform}
						style={{
							opacity,
							transform: `translateX(${translateX}px)`,
							display: "flex",
							alignItems: "center",
							gap: 18,
							background: COLORS.surface,
							border: `1px solid ${COLORS.border}`,
							borderLeft: `4px solid ${p.color}`,
							borderRadius: 8,
							padding: "12px 18px",
						}}
					>
						<span
							style={{
								fontFamily: FONT,
								fontSize: 18,
								fontWeight: 700,
								color: p.color,
								minWidth: 92,
								flexShrink: 0,
							}}
						>
							{p.platform}
						</span>
						<span style={{ fontFamily: "monospace", fontSize: 19, color: COLORS.text }}>
							{p.path}
						</span>
					</div>
				);
			})}
		</div>
	);
};
