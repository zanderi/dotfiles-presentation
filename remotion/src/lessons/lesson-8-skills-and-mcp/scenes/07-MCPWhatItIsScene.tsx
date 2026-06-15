import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, EASE_OUT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const MCPWhatItIsScene: React.FC = () => {
	const frame = useCurrentFrame();

	const fadeIn = (delay: number) =>
		interpolate(frame, [delay, delay + 15], [0, 1], {
			extrapolateRight: "clamp",
			extrapolateLeft: "clamp",
			easing: EASE_OUT,
		});

	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="Model Context Protocol" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<InfoCard
					icon="🔌"
					title="External System Access"
					body="Standard for connecting external APIs to the AI's context window. Copilot reads external systems directly — no copy-paste required."
					color={COLORS.purple}
					delay={10}
				/>

				<div style={{ opacity: fadeIn(35) }}>
					<TwoColumn
						left={
							<BulletList
								delay={35}
								items={[
									{ text: "❌ Before MCP: copy-paste into prompt", color: COLORS.muted },
								]}
							/>
						}
						right={
							<BulletList
								delay={40}
								items={[
									{ text: "✅ After MCP: Copilot reads directly", color: COLORS.purple },
								]}
							/>
						}
					/>
				</div>
			</div>
		</SceneFrame>
	);
};
