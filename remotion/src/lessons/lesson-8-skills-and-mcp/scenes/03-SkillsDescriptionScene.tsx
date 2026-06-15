import React from "react";
import { COLORS, FONT } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";

export const SkillsDescriptionScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="Description Controls Triggering" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<div style={{ background: COLORS.surface, border: `2px solid ${COLORS.red}`, borderRadius: 12, padding: 24, height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
							<div style={{ fontFamily: FONT, fontSize: 18, color: COLORS.red }}>❌ Capability statement</div>
							<div style={{ fontFamily: FONT, fontSize: 16, color: COLORS.muted, lineHeight: 1.5 }}>
								"Validates commit messages according to conventional commit format"
							</div>
							<div style={{ fontFamily: FONT, fontSize: 15, color: COLORS.red }}>Fires less predictably</div>
						</div>
					}
					right={
						<div style={{ background: COLORS.surface, border: `2px solid ${COLORS.green}`, borderRadius: 12, padding: 24, height: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
							<div style={{ fontFamily: FONT, fontSize: 18, color: COLORS.green }}>✅ Trigger phrase</div>
							<div style={{ fontFamily: FONT, fontSize: 16, color: COLORS.muted, lineHeight: 1.5 }}>
								"Use this when validating a commit message"
							</div>
							<div style={{ fontFamily: FONT, fontSize: 15, color: COLORS.green }}>Fires reliably</div>
						</div>
					}
				/>
			</div>
		</SceneFrame>
	);
};
