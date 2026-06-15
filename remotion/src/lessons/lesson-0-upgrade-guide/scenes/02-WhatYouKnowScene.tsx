import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { TwoColumn } from "../../../components/TwoColumn";
import { BulletList } from "../../../components/BulletList";

export const WhatYouKnowScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.purple}>
			<Headline text="What You Already Know" size="lg" delay={0} />

			<div style={{ flex: 1, marginTop: 32 }}>
				<TwoColumn
					left={
						<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
							<BulletList
								delay={10}
								items={[
									{ text: "✅ Install & authenticate", color: COLORS.green },
									{ text: "✅ copilot-instructions.md", color: COLORS.green },
									{ text: "✅ Dotfiles repo", color: COLORS.green },
									{ text: "✅ Tool configs", color: COLORS.green },
									{ text: "✅ Repo instructions", color: COLORS.green },
									{ text: "✅ Custom agents", color: COLORS.green },
									{ text: "✅ MCP servers", color: COLORS.green },
									{ text: "✅ Models", color: COLORS.green },
									{ text: "✅ Plan / Autopilot / Fleet", color: COLORS.green },
								]}
							/>
						</div>
					}
					right={
						<div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
							<BulletList
								delay={20}
								items={[
									{ text: "✅ Model selection", color: COLORS.purple },
									{ text: "✅ Testing strategy", color: COLORS.purple },
									{ text: "✅ Conductor thinking", color: COLORS.purple },
									{ text: "✅ Project setup patterns", color: COLORS.purple },
								]}
							/>
						</div>
					}
				/>
			</div>
		</SceneFrame>
	);
};
