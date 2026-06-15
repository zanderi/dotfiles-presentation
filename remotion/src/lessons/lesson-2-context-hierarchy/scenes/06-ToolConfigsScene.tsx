import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { BulletList } from "../../../components/BulletList";

export const ToolConfigsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Tool Configs Are Context" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 32 }}>
				<BulletList
					delay={10}
					items={[
						{ text: ".editorconfig — indentation, line endings", color: COLORS.blue },
						{ text: ".prettierrc — formatting rules", color: COLORS.blue },
						{ text: "tsconfig.json — TypeScript compiler targets", color: COLORS.blue },
					]}
				/>
				<BulletList
					delay={35}
					items={[
						{ text: "Copilot reads these when generating code", color: COLORS.muted },
						{ text: "Wrong indentation in output? Check if .editorconfig exists", color: COLORS.orange },
						{ text: "Deprecated TS patterns? Check tsconfig.json target", color: COLORS.orange },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
