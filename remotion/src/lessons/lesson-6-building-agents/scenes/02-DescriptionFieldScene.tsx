import React from "react";
import { COLORS, FONT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";

export const DescriptionFieldScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<Headline text="The Most Important Field" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<div style={{
							background: COLORS.surface,
							border: `2px solid ${COLORS.red}`,
							borderRadius: 12,
							padding: 24,
							height: "100%",
							display: "flex",
							flexDirection: "column",
							gap: 16,
						}}>
							<div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.red }}>❌ Capability list</div>
							<div style={{ fontFamily: "monospace", fontSize: 17, color: COLORS.muted, lineHeight: 1.5 }}>
								"Reviews code, checks security, audits dependencies"
							</div>
							<div style={{ fontFamily: FONT, fontSize: 16, color: COLORS.red }}>Fires less predictably</div>
						</div>
					}
					right={
						<div style={{
							background: COLORS.surface,
							border: `2px solid ${COLORS.green}`,
							borderRadius: 12,
							padding: 24,
							height: "100%",
							display: "flex",
							flexDirection: "column",
							gap: 16,
						}}>
							<div style={{ fontFamily: FONT, fontSize: 20, color: COLORS.green }}>✅ Trigger phrases</div>
							<div style={{ fontFamily: "monospace", fontSize: 17, color: COLORS.muted, lineHeight: 1.5 }}>
								"Use this agent when you're about to open a PR and want all quality gates run"
							</div>
							<div style={{ fontFamily: FONT, fontSize: 16, color: COLORS.green }}>Fires reliably</div>
						</div>
					}
				/>
			</div>

		</SceneFrame>
	);
};
