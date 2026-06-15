import React from "react";
import { COLORS, FONT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const WhySpecialistsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Why Specialists?" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<div style={{
							background: COLORS.surface,
							border: `2px solid ${COLORS.red}`,
							borderRadius: 12,
							padding: 24,
							height: "100%",
						}}>
							<div style={{ fontFamily: FONT, fontSize: 22, color: COLORS.red, marginBottom: 16 }}>
								❌ One agent doing everything
							</div>
							<BulletList
								delay={10}
								items={[
									{ text: "Generic, shallow suggestions", color: COLORS.muted },
									{ text: "Context overload", color: COLORS.muted },
									{ text: "Inconsistent output quality", color: COLORS.muted },
								]}
							/>
						</div>
					}
					right={
						<div style={{
							background: COLORS.surface,
							border: `2px solid ${COLORS.green}`,
							borderRadius: 12,
							padding: 24,
							height: "100%",
						}}>
							<div style={{ fontFamily: FONT, fontSize: 22, color: COLORS.green, marginBottom: 16 }}>
								✅ Specialist agents
							</div>
							<BulletList
								delay={20}
								items={[
									{ text: "Deep domain knowledge", color: COLORS.green },
									{ text: "Focused, high-quality output", color: COLORS.muted },
									{ text: "Composable pipelines", color: COLORS.muted },
								]}
							/>
						</div>
					}
				/>
			</div>
		</SceneFrame>
	);
};
