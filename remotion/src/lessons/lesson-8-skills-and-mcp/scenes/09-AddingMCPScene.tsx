import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { CodeBlock } from "../../../components/CodeBlock";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const AddingMCPScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="Adding an MCP Server" size="lg" delay={0} />

			<div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
				<CodeBlock delay={10} code={`/mcp add github --scope local`} />

				<TwoColumn
					left={
						<BulletList
							delay={30}
							items={[
								{ text: "local — this repo only", color: COLORS.purple },
								{ text: "Stored in .copilot/mcp.json", color: COLORS.muted },
							]}
						/>
					}
					right={
						<BulletList
							delay={35}
							items={[
								{ text: "global — all repos", color: COLORS.blue },
								{ text: "Stored in ~/.copilot/mcp.json", color: COLORS.muted },
							]}
						/>
					}
				/>
			</div>
		</SceneFrame>
	);
};
