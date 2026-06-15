import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const MCPSecurityScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.orange}>
			<Headline text="MCP Security Rules" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<BulletList
					delay={10}
					items={[
						{ text: "Only add servers you control or explicitly trust", color: COLORS.orange },
						{ text: "Do not add servers from random repos or unknown publishers", color: COLORS.red },
						{ text: "Servers can read your files and repository contents", color: COLORS.orange },
						{ text: "Review what permissions the server requests", color: COLORS.muted },
						{ text: "Prefer local scope — limit blast radius", color: COLORS.muted },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
