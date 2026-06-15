import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const ValidatorsFirstScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 20], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	const slideUp = (delay: number) =>
		interpolate(frame, [delay, delay + 25], [25, 0], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<div
				style={{
					opacity: fadeIn(0),
					transform: `translateY(${slideUp(0)}px)`,
					fontFamily: FONT,
					fontSize: 40,
					fontWeight: 700,
					color: COLORS.text,
					marginBottom: 32,
					lineHeight: 1.3,
				}}
			>
				Build feedback and guardian agents before you build any scaffolders.
			</div>

			<TwoColumn
				left={
					<div style={{
						background: COLORS.surface,
						border: `2px solid ${COLORS.red}`,
						borderRadius: 12,
						padding: 20,
					}}>
						<BulletList
							delay={20}
							items={[
								{ text: "❌ Scaffolder → no reviewer", color: COLORS.red },
								{ text: "Ships whatever it produces — unchecked", color: COLORS.muted },
							]}
						/>
					</div>
				}
				right={
					<div style={{
						background: COLORS.surface,
						border: `2px solid ${COLORS.green}`,
						borderRadius: 12,
						padding: 20,
					}}>
						<BulletList
							delay={30}
							items={[
								{ text: "✅ Reviewer → Guardian → Scaffolder", color: COLORS.green },
								{ text: "Reviewed output before it ships", color: COLORS.muted },
							]}
						/>
					</div>
				}
			/>
		</SceneFrame>
	);
};
