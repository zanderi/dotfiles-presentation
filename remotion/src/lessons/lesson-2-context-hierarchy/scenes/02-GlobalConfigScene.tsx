import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { InfoCard } from "../../../components/InfoCard";
import { BulletList } from "../../../components/BulletList";
import { PlatformPaths } from "../../../components/PlatformPaths";

export const GlobalConfigScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.blue}>
			<Headline text="Global Config" size="lg" delay={0} />
			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}>
				<PlatformPaths
					delay={10}
					paths={[
						{ platform: "Copilot", path: "~/.copilot/copilot-instructions.md", color: COLORS.blue },
						{ platform: "Claude", path: "~/.claude/CLAUDE.md", color: COLORS.purple },
						{ platform: "Cursor", path: "~/.cursorrules", color: COLORS.orange },
					]}
				/>
				<InfoCard
					icon="👤"
					title="Loads every session, every project"
					body="Your personal rules — name, code style, patterns, non-negotiables. If this file doesn't exist, Copilot knows nothing about you."
					color={COLORS.blue}
					delay={25}
				/>
				<BulletList
					delay={45}
					items={[
						{ text: "Your name and role", color: COLORS.muted },
						{ text: "Preferred languages and frameworks", color: COLORS.muted },
						{ text: "Personal non-negotiables (async/await only, no .Result, etc.)", color: COLORS.blue },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
