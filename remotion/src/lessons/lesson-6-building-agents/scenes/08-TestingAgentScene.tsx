import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const TestingAgentScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.yellow}>
			<Headline text="Does It Work?" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32, marginTop: 32 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "✅ Does it do what the description says?", color: COLORS.green },
						{ text: "✅ Does it follow the hard rules?", color: COLORS.green },
						{ text: "✅ Does the output match your spec?", color: COLORS.green },
						{ text: "✅ Does it fail gracefully on bad input?", color: COLORS.green },
					]}
				/>

				<BulletList
					delay={50}
					items={[
						{ text: "Fix behavior → edit the body", color: COLORS.muted },
						{ text: "Fix routing → edit the description", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
