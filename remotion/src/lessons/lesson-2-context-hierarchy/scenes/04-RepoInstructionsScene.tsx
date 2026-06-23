import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { PlatformPaths } from "../../../components/PlatformPaths";
import { BulletList } from "../../../components/BulletList";

export const RepoInstructionsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Repo Instructions" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<PlatformPaths
					delay={10}
					paths={[
						{ platform: "Copilot", path: ".github/copilot-instructions.md", color: COLORS.blue },
						{ platform: "Claude", path: "CLAUDE.md", color: COLORS.purple },
						{ platform: "Cursor", path: ".cursorrules", color: COLORS.orange },
					]}
				/>
				<BulletList
					delay={25}
					items={[
						{ text: "Tech stack and framework versions", color: COLORS.blue },
						{ text: "Naming conventions and architecture patterns", color: COLORS.blue },
						{ text: "Folder structure rules", color: COLORS.blue },
						{ text: "Loads on every conversation for this repo", color: COLORS.muted },
					]}
				/>
				<BulletList
					delay={50}
					items={[
						{ text: "Accurate + detailed = accurate, detailed generated code", color: COLORS.green },
						{ text: "Stale or vague = broken foundation for every agent", color: COLORS.red },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
