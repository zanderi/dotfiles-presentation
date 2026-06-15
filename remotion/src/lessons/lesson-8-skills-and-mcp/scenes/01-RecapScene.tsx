import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const RecapScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="Skills & MCP" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<BulletList
							delay={10}
							items={[
								{ text: "Layer 2 — Skills", color: COLORS.green },
								{ text: "Semi-automatic, description match", color: COLORS.muted },
								{ text: "Can run scripts", color: COLORS.muted },
								{ text: "Stateless, single-purpose", color: COLORS.muted },
							]}
						/>
					}
					right={
						<BulletList
							delay={20}
							items={[
								{ text: "MCP", color: COLORS.purple },
								{ text: "External system access protocol", color: COLORS.muted },
								{ text: "Connects Copilot to outside systems", color: COLORS.muted },
								{ text: "Not a layer — an extension", color: COLORS.muted },
							]}
						/>
					}
				/>
			</div>
		</SceneFrame>
	);
};
