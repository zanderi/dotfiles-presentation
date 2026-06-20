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
			"Welcome to Lesson Nine — Project Setup. The biggest mistake in AI-assisted development is starting with code. This lesson covers the twenty or so documents you generate before writing a single line of app code — and why that upfront investment eliminates the fifty percent rework tax.",
	},
	{
		id: "scene-01",
		label: "Before Any Code",
		estimatedFrames: 956,
		script:
			"Reactive prompting — jumping straight into writing code with AI — leads to 50% more rework than upfront design investment. The first thing you generate with AI should not be app code. It should be the documents that describe what the app code will do, who will use it, how it should look, and what the non-negotiables are. Around twenty files before one line of app code. That's the investment.",
	},
	{
		id: "scene-02",
		label: "Naming and Framing",
		estimatedFrames: 804,
		script:
			"Start with the name and the problem statement. Before any AI tooling, write one paragraph: what is this project, who is it for, what problem does it solve. This becomes the seed for everything else. Your copilot-instructions.md starts here. Your agent descriptions start here. Ambiguity in the name and framing propagates into ambiguity in every generated artifact downstream.",
	},
	{
		id: "scene-03",
		label: "Generating Docs",
		estimatedFrames: 665,
		script:
			"Use AI to generate the foundational documents from your problem statement. Project README. Architecture overview. Tech stack decisions with rationale. Data model sketch. These don't need to be perfect — they need to be good enough to give every subsequent agent accurate context. Context quality is output quality.",
	},
	{
		id: "scene-04",
		label: "Project Instructions",
		estimatedFrames: 818,
		script:
			"copilot-instructions.md is the most important file in the repo. It loads into every conversation. It shapes every agent's behavior. Document the tech stack, the architectural patterns, the naming conventions, the non-negotiables. If your instructions drift from the codebase reality, every agent works from stale context. Treat instructions like code — version them, review changes, fix drift like a bug.",
	},
	{
		id: "scene-05",
		label: "Design System First",
		estimatedFrames: 762,
		script:
			"Before writing a single UI component, generate the design system documentation. Typography scale. Color tokens. Spacing system. Component naming conventions. This prevents every AI-generated component from inventing its own conventions. One design system document means consistent AI output across the entire frontend. Without it, you'll spend more time fixing inconsistencies than you saved with generation.",
	},
	{
		id: "scene-06",
		label: "Feature Specs",
		estimatedFrames: 887,
		script:
			"Write feature specifications before implementing features. Not detailed enough to be code — specific enough to be unambiguous. What does the feature do? What are the edge cases? What does success look like? What does failure look like? A feature spec is what separates \"build me a login form\" from \"build me a login form that does exactly this.\" The spec is the contract.",
	},
	{
		id: "scene-12",
		label: "The Setup Files",
		estimatedFrames: 800,
		script:
			"So what are these files? At the root, a README and a fleet plan. A docs folder — tech stack, architecture, data model, design system, and more. A few contributor guides. Your project instructions and config. And one specification per feature. Around twenty documents for a typical project — and the feature specs scale with your feature count, so the total grows with the app.",
	},
	{
		id: "scene-07",
		label: "Fleet Build Plan",
		estimatedFrames: 901,
		script:
			"You've seen the files — now the build order. For a new project, fleet is the right tool for the initial build. Most of these files are independent — they don't depend on each other — so fleet builds them in parallel, in waves. Wave 1: README, architecture, tech stack docs. Wave 2: design system, component decisions, data model. Wave 3: feature specs, instruction files, agent setup. Sequential dependency requires sequential waves. Independent work gets parallelized.",
	},
	{
		id: "scene-08",
		label: "Plan Mode for Prerequisites",
		estimatedFrames: 762,
		script:
			"Before running fleet, use plan mode to map the prerequisite chain. What needs to exist before what? copilot-instructions.md must exist before any agents run. The design system doc must exist before any UI work. The data model must exist before any API work. Plan mode surfaces these dependencies. Fleet executes after the plan is approved.",
	},
	{
		id: "scene-09",
		label: "Running Fleet",
		estimatedFrames: 762,
		script:
			"Launch the fleet. Watch the waves execute. Each agent works in isolation on its assigned task. When a wave completes, review the outputs before launching the next wave. Don't approve outputs blindly — the documents agents generate are the context that shapes everything downstream. Bad context in Wave 1 produces bad output in Wave 3.",
	},
	{
		id: "scene-11",
		label: "Resilience Patterns",
		estimatedFrames: 860,
		script:
		  "Build resilience into your pipeline from the start. If an agent consistently fails, don't retry harder — escalate and reroute. That's the circuit breaker pattern applied to agent orchestration. Validate output automatically: schema checks, linting, semantic validation. Don't wait for a human to catch what should have been caught in the pipeline. Collect metrics — token spend on execution versus corrections, bug escape rate at each stage, rework cycles per agent. An ambiguous instruction multiplied across fifty fleet agents is fifty times the problem. Treat your agent instructions like code: version them, document changes, and fix drift before it compounds.",
	},
	{
		id: "scene-10",
		label: "Closing",
		estimatedFrames: 901,
		script:
			"Around twenty files before one line of app code. That's the investment that prevents the 50% rework tax. The project instructions, the design system, the feature specs — these are not overhead. They are the infrastructure that makes AI generation reliable and consistent. Exercise 9 walks you through the full setup sequence. Start with the problem statement. End with a fleet plan that builds everything else.",
	},
] as const;

export type VoiceoverScene = (typeof VOICEOVER_SCENES)[number];

// Total frames used in Root.tsx
// Sum of scene frames minus transition overlaps: (N_scenes - 1) * TRANSITION_FRAMES
export const TOTAL_FRAMES =
	VOICEOVER_SCENES.reduce((sum, s) => sum + s.estimatedFrames, 0) -
	(VOICEOVER_SCENES.length - 1) * TRANSITION_FRAMES;
