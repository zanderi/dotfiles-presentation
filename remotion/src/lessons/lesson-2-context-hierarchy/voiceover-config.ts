// Narration scripts and estimated frame durations for each scene.
// Frame estimates based on 130 WPM = 13.85 frames/word at 30fps.
//
// After running `node --strip-types generate-voiceover.ts`:
//   1. Set AUDIO_ENABLED = true below
//   2. Restart Remotion Studio — audio plays in sync automatically

export const AUDIO_ENABLED = true;

export const FPS = 30;
export const TRANSITION_FRAMES = 20;

export const VOICEOVER_SCENES = [
	{
		id: "scene-00",
		label: "Title",
		estimatedFrames: 750,
		script:
			"Welcome to Lesson Two — The Context Hierarchy. Copilot doesn't just read one file when you start a conversation. It assembles a stack of context from multiple sources. This lesson maps that stack and explains what belongs in each layer.",
	},
	{
		id: "scene-01",
		label: "The Stack",
		estimatedFrames: 831,
		script:
			"Before you touch a single agent or skill, understand what Copilot already knows. The context window is built in layers, from the most persistent to the most specific. Global config loads every time, for every project. Repo instructions load for that project. Task instructions load when the path matches. Skills load when your prompt matches their description. Tool configs load because Copilot reads them. The stack is always there. Most developers ignore it.",
	},
	{
		id: "scene-02",
		label: "Global Config",
		estimatedFrames: 790,
		script:
			"The global instruction file at ~/.copilot/copilot-instructions.md loads into every session, across every project. This is where your personal rules live. Your name. Your code style. Your preferred patterns. Your non-negotiables. Anything that applies to you as a developer — not to a specific project — belongs here. If you haven't created this file, Copilot knows nothing about you except what you tell it in the prompt.",
	},
	{
		id: "scene-03",
		label: "AGENTS.md",
		estimatedFrames: 748,
		script:
			"AGENTS.md at the repo root is model-agnostic. It's not Copilot-specific — any AI coding assistant that follows the convention reads it. Use it for the rules that must apply regardless of which tool is active. Architecture decisions. Security constraints. Things that should never change without an explicit team discussion. Think of it as the constitution for the repo. Everything else is policy. This is the constitution.",
	},
	{
		id: "scene-04",
		label: "Repo Instructions",
		estimatedFrames: 818,
		script:
			"The repo instruction file at .github/copilot-instructions.md is project-specific context. Tech stack. Framework versions. Naming conventions. Architecture patterns. Folder structure rules. What this project is and how it works. Copilot reads this file on every conversation for that repo. If this file is accurate and detailed, Copilot generates accurate, detailed code. If it's stale or vague, every agent in the repo works from a broken foundation.",
	},
	{
		id: "scene-05",
		label: "Task Instructions",
		estimatedFrames: 804,
		script:
			"Task instruction files in .github/instructions/ load automatically when the path matches. A file named api.instructions.md can be configured to load when you're working in the API layer. A file named tests.instructions.md loads when you're in the tests folder. This is precision context. Instead of one giant instructions file that covers everything, you load the right rules for the right files at the right time. Granular is better.",
	},
	{
		id: "scene-06",
		label: "Tool Configs",
		estimatedFrames: 693,
		script:
			"Copilot reads your tool config files. .editorconfig sets indentation and line endings. .prettierrc sets formatting rules. tsconfig.json sets your TypeScript compiler targets. These files are context. When Copilot generates code, it checks these constraints. If your generated code has wrong indentation or uses deprecated TypeScript patterns, check whether the relevant config file exists and is accurate.",
	},
	{
		id: "scene-07",
		label: "The Safety Net",
		estimatedFrames: 887,
		script:
			"Copilot is one layer in a multi-layer system. It is not the only thing standing between your code and production. The editor catches syntax errors before you even save. Pre-commit hooks run lint and format before the commit lands. CI runs your full test suite before the branch merges. Code review catches logic errors and design flaws before they ship. Copilot's job is to help you write better code faster. The rest of the system's job is to catch what Copilot misses.",
	},
	{
		id: "scene-08",
		label: "Instructions Like Code",
		estimatedFrames: 887,
		script:
			"Treat your instruction files like code. Commit them. Review changes to them. Track when they were last updated relative to major codebase changes. If the codebase migrated from Vue 2 to Vue 3 and the instructions still say Vue 2, every AI-generated component will be Vue 2. Drift is a bug. The instructions are not documentation — they are live configuration that shapes every AI output from the moment they load. Keep them accurate. Fix drift like you fix bugs.",
	},
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

export const TOTAL_FRAMES =
	VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
	(VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
