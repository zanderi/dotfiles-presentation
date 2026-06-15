import React from "react";
import { COLORS } from "../../../constants";
import { SceneFrame } from "../../../components/SceneFrame";
import { Headline } from "../../../components/Headline";
import { StepBadge } from "../../../components/StepBadge";
import { BulletList } from "../../../components/BulletList";

export const ToolOperatorsScene: React.FC = () => {
	return (
		<SceneFrame accentColor={COLORS.green}>
			<Headline text="Tool Operators" size="lg" delay={0} />
			<div style={{ marginTop: 12, marginBottom: 16 }}>
				<StepBadge step="BUSINESS" label="TOOL OPERATORS" />
			</div>
			<div style={{ flex: 1 }}>
				<BulletList
					delay={15}
					items={[
						{ text: "github-issue-creator — translates findings into tracked issues", color: COLORS.green },
						{ text: "changelog-writer — pushes version entries to CHANGELOG.md", color: COLORS.muted },
						{ text: "pr-description-writer — bridges dev and business pipelines", color: COLORS.muted },
						{ text: "Tool operators are why business pipeline output reaches the people who need it", color: COLORS.blue },
					]}
				/>
			</div>
		</SceneFrame>
	);
};
