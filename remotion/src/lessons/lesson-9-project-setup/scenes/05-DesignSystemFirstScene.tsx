import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const DesignSystemFirstScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Before Any UI Component" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "Typography scale", color: COLORS.blue },
						{ text: "Color tokens", color: COLORS.blue },
						{ text: "Spacing system", color: COLORS.blue },
						{ text: "Component naming conventions", color: COLORS.blue },
					]}
				/>
				<BulletList
					delay={40}
					items={[
						{ text: "Without this, every AI-generated component invents its own conventions", color: COLORS.orange },
						{ text: "One doc prevents this — permanently", color: COLORS.green },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
