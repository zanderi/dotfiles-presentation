import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONT, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";

export const BeforeAnyCodeScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Before Any Code" size="xl" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<div style={{ background: `${COLORS.red}15`, border: `2px solid ${COLORS.red}`, borderRadius: 12, padding: 24, height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
							<div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.red }}>❌ Reactive Prompting</div>
							<div style={{ fontFamily: FONT, fontSize: 17, color: COLORS.muted, lineHeight: 1.5 }}>Jump straight into code, fix mistakes as they appear</div>
							<div style={{ opacity: fadeIn(25), fontFamily: FONT, fontSize: 22, color: COLORS.red, fontWeight: 700 }}>50% more rework</div>
						</div>
					}
					right={
						<div style={{ background: `${COLORS.green}15`, border: `2px solid ${COLORS.green}`, borderRadius: 12, padding: 24, height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
							<div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.green }}>✅ Upfront Design Investment</div>
							<div style={{ fontFamily: FONT, fontSize: 17, color: COLORS.muted, lineHeight: 1.5 }}>22 documents before one line of app code</div>
							<div style={{ opacity: fadeIn(35), fontFamily: FONT, fontSize: 22, color: COLORS.green, fontWeight: 700 }}>Consistent output, less rework</div>
						</div>
					}
				/>
			</div>

			<div style={{ opacity: fadeIn(50), fontFamily: FONT, fontSize: 24, fontWeight: 700, color: COLORS.text, textAlign: "center" as const, marginTop: 24 }}>
				22 files before one line of app code
			</div>
		</SceneFrame>
	);
};
